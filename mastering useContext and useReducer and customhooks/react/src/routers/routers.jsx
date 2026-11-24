import React from 'react'

import {useEffect, useState} from "react";
import { Navigate,useLocation,BrowserRouter,Routes,Route ,Link,NavLink,Outlet ,useSearchParams,useNavigate,useParams} from 'react-router';
//got the concepts of Routes , nested  childs and outlets how do we place the nested  component in the 
// in the nested  components
// now the part is  navLink is done that we  have like that is it provides an isActive class  
// which is usefull other than  fucking   normal active  okay
//now we will study useSearchParams
//it is a  hook that allows us to  read and update the  query parameters  in the url
//we can use it like read filter from the url   search operations  sort products  track pagination
// update the url  when  a user changes  filters

//useParams   are completely used for the  fucking  like  
//let's understand the concept  of 
//the  fucking   useParams
//we use  useParams for the dynamic version
//of the url    that is  we collect the value using it 
//
//protected route is simply a  new components that we have to make 
// it   that will check weather you are  logged in  or not if yes then it is like okay it 
//show some  of the childs and  other  will be  accepting regarding the other 
//  matters right
// this is the case of the  react developer mother fucker 


function Home(){
    // here let us  use  the concepts of   navigate that is 
    const navigate=useNavigate();
    const  location=useLocation();
    console.log(location.pathname)



    return <>
                <button  onClick={()=>{navigate("/product/123")}}>navigate to products</button>
            <h1> This is the Home  page11</h1>
    </>
}

function ProtectedRoute({isLogggedin}){
    if(!isLogggedin){
        return <><Navigate to="/"></Navigate></>
    }else{

        return <Outlet/>

    }
}


function Product(){
    //this is the url we will get the fucking part of that url that is
    

        const {id}=useParams();
        console.log(id)


    return <> this is the Product page  {id} </>

}

function About(){
    //lets use the useSearchParams here
    const [search,setSearchParams]=useSearchParams();
    const [btn,setClick ]=useState(0);
    const handleClick=()=>{
        //this is the  game motherfucker !!
        setClick((prev)=>prev+1);
        setSearchParams({category:"motherfucker "});
    }
   

    useEffect(()=>{
        const category=search.get("category");
        console.log(category);

    },[search]);

    
    return <>Welcome to the About Page
    
    <button className="px-2 py-3 border h-8" onClick={handleClick}>Send  the url</button>
    </>
}

function NotFound(){

    return <> <h1> 404 Not Found!!</h1></>
}

function Navbar(){
   
      
    return (
    <nav className='px-10 py-4 w-full bg-zinc-400 flex items-center gap-4'>
        <NavLink  to="/">Home</NavLink>
         <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About</NavLink>




    </nav>)
}


function SideBar(){

    return (<>
        <div className="sidebar h-screen w-50  px-10 bg-zinc-400">
           

        </div>
    
    </>)
}

function Layout(){

    return <>


        <Navbar/>
        <div className=' flex gap-10'><SideBar/>
                <Outlet/>
        </div>
          
    </>
}


function AppContent(){

    //we will be using the parent and child Layout and nested routes concepts here]



    return <>

    

    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            
            <Route element={<ProtectedRoute isLoggedIn={false}/>} >
            <Route path="product/:id" element={<Product/>}/>
            <Route path="about" element={<About/>}/>
            </Route>


            <Route path="*" element={<NotFound/>}/>

          </Route>


    </Routes>
    
    
    </>
}

//useNavigate  sending  user  to next  page without using the
// the link tag that is   useNavigate 
//
//const navigate=useNavigate();


function Routers() {
  return (
    <>
    
    <BrowserRouter>

    <AppContent/>
    
    
    </BrowserRouter>
     
     
     </>


    
  )
}

export default Routers