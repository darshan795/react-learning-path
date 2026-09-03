import React from "react";
import {useState,useEffect} from "react";

function Exercise9(){
    const [users,setUsers]=useState([]);
    const [input,setInput]=useState("");

    const [searchedUsers,setSearch]=useState([]);
    console.log(input)
    //using the debouncing effect to collect the input  once in a 1 s 
     const handleChange=(event)=>{
            setInput(event.target.value)
            


            }
    useEffect( ()=>{

        async function fetchUsers(){
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com");
                const data=await response.json();

                setUsers(data);
                

            }catch(err){
                console.log("error while fetching the data from the user mother  fucker!!",err);
            }
        }

        fetchUsers();



    
       
    },[]);


    useEffect(()=>{
         const timer=setTimeout( async ()=>{
            console.log("after the cleanup  function and useEffect",input)
            //here i  have to make the api calls to fetch the data  from the users
            try{
            const response=await fetch(`https://jsonplaceholder.typicode.com/users?name=${input}`);
            const data=await response.json();
            
            setSearch(data);
            console.log(searchedUsers);

            }catch(err){
                console.log("err  while searching hte users",err);  
            }
            
            
            
           

         },1000)
        //  console.log("input her ",input)
         

         return ()=>{
            clearTimeout(timer);

         }

    },[input])
    

    
    return (<>
    <div  className=" main  flex flex-col  items-center py-10 gap-10 ">
        <div className="search">
            <input  value={input} onChange={(event)=>{handleChange(event)}} className="border py-2 px-2 w-110" placeholder="Search the users you want  to search!!"></input>

        </div>
        <div className="display function grid grid-cols-3 gap-6">

            
            
            {searchedUsers.length==0?
            
            users.map((data)=>{

                return (<div className="cards border py-4 px-4 rounded-[10px] flex flex-col items-center gap-2">
                <h1 className="text-[20px]">{data.name}</h1>
                <p>{data.username}</p>
                <h3>{data.website}</h3>
                <h4>{data.phone}</h4>
                
            </div>)


            }) :searchedUsers.map((data)=>{
                return <>{data.name}</>
            })   }

        </div>


    </div>
    </>)
}

export default Exercise9;
