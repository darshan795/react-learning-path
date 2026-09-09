import React from "react";
import {useRef} from "react";

function Exercise1(){


    //using  the useRef mother  fucker !!
    const inputRef=useRef(null);
    console.log(inputRef)
    const clearInput=()=>{
        inputRef.current.value="";

    }
    const focusInput=()=>{
        inputRef.current.focus();
        
    }

    return <>
    <div className="input-controller  flex  flex-col items-center py-10 gap-10">
        <div className="header text-[40px]">
            <h1>Input Header</h1>

        </div>

        <div className="inputs">
            <input ref={inputRef} className="border px-2 py-2 w-100" placeholder="enter the input  motherfucker!!"></input>
            
        </div>
        <div  className="buttons flex   gap-4">
            <button onClick={focusInput} className="btn1  btn  border bg-blue-400    px-2 py-1 rounded-[50px]"> Focus input</button>
            <button onClick={clearInput} className="btn1  btn  border bg-blue-400    px-2 py-1 rounded-[50px]"> Clear  input</button>

        </div>

        
    </div>

    
    </>
}

export default Exercise1;
