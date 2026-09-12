import React from "react";
import {useState,useRef} from "react";

function Exercise6(){
    const input=useRef(null)
    const handleClick=()=>{
        input.current.select();
    }

    return <>
    <div className=" flex  flex-col items-center py-10 gap-6 ">
        <input  ref={input} className="border px-4 py-2 w-120" placeholder="Enter the result guyss" >
        </input>
        <button onClick={handleClick} className="border px-3 py-1  max-w-[120px] bg-blue-200 rounded-[20px]">Select input</button>
    </div>
    </>
}
export default Exercise6;
