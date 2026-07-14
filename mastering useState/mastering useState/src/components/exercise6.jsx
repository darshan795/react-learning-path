import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
//ui  part is  done now the only  remaining part  is the  logic one motherfucker!!




function Exercise6(){
    const [search,setSearch]=useState("");
    const arr=["React","Tailwind Css","Advanced Javascript","Html Css"];
    function handleSearch(event){

        
        setSearch(event.target.value);
    
        
    }
    
     const result=arr.filter((a)=>{
       return  a.toLowerCase().includes(search.toLowerCase());

     })
     console.log(result);
    return <>
    <div className="search-bar flex flex-col gap-16 bg-white px-10 py-10 rounded-[10px]">
        <div className="header">
            <h1 className="   flex justify-center items-center gap-4 text-2xl"> Search Technologies  <FaSearch/> </h1>
        </div>
        <div className="search flex justify-center items-center relative ">
             <input onChange={handleSearch} className="border px-12 py-2 rounded-[50px] w-100" placeholder="Search here!!!"></input>
             <FaSearch className="h-10 w-10 border px-2 py-2 rounded-[50%]  absolute left-0"/>
        </div>

        <div className="technologies flex flex-col gap-2 ">
            {result.length>0?(result.map((ele,index)=>{
                return<h1 className="bg-zinc-200 px-4 py-2  font-[500] text-[20px] rounded-[10px]" key={index}>{ele}</h1>

            })):(<h1 className="bg-zinc-200 px-4 py-2  font-[500] text-[20px] rounded-[10px]">Results are not found!!</h1>)}
            

            
        </div>  
       
    </div>          


    
    </>
}

export default Exercise6;
