import React  from "react";
import {useState,useEffect} from "react";

function Exercise10(){
    const [title,setTitle]=useState("");

    const handleChange=(event)=>{
        
             setTitle(event.target.value);
        console.log(title);

}

useEffect(()=>{
    let timer=setTimeout(()=>{
        console.log("the input is",title);

        document.title=title;


    },1000)
    return ()=>{
        clearTimeout(timer);
    }
},[title]);
    
    return <>
    <div className="Title-controller flex flex-col items-center py-10 gap-10 ">
        <div className="title">
            <h1 className=" text-[40px]  ">Page Controller</h1>
        </div>
        <div className="">
            <input  value={title} onChange={(event)=>{handleChange(event)}} className="border px-4  w-120 py-2" placeholder="Enter  the title !!"></input>

        </div>
    </div>
    </>
}

export default Exercise10;