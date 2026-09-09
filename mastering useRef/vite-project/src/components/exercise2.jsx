import React from "react";
import {useRef,useState,useEffect} from "react";
function Exercise2(){

    //praticing the Exercise2 of the useRef  of the react
    const [count,setCount]=useState(0);
    const countRef=useRef(0);
    
    const increase=()=>{
        setCount((prev)=>{
            
            return prev+5;
        })
    }
    useEffect(()=>{
        countRef.current=count;

    },[count])


    return (<>
    <div className="previous value tracker flex flex-col items-center py-10 gap-10">
        <div className="header text-[30px]">
            <h1>Previous value Tracket</h1>

        </div>
        <div  className="display">
          <h1 className="text-[25px]"> count:  {count }</h1> 
           
            <h1 className="text-[25px]"> previous  count:  {countRef.current}</h1>  

        </div>
        <div className="buttons">
            <button onClick={increase} className="btns bg-blue-300  rounded-[20px] px-3 py-1">Increase++</button>

        </div>
    </div>

    </>)
}

export default Exercise2;   