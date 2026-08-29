import React from "react";
import {useState,useEffect} from "react";


function Exercise5(){

    const [Search,setSearch]=useState("");

    const  handleSearch=(event)=>{
        setSearch(event.target.value);
        console.log(Search);
    
    }

    useEffect(()=>{

        const timer=setTimeout(()=>{
            console.log("Searching for this motherfucker",Search);

        },1000)

        return ()=>{
            clearTimeout(timer);
        }

    },[Search])
    


    //this 
    return <>
    <div className="search   h-screen w-full flex bg-zinc-200 justify-center items-center   ">
        <div className="display">
            <input value={Search} onChange={()=>{handleSearch(event)}} className=" border py-2 px-4 w-100" placeholder="search the items you want to search!!"></input>
        </div>
        <div  className="display">
            <h1></h1>
        </div>
    </div>

    </>
}

export default Exercise5;
