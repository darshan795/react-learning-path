import React from "react";
import {useState} from "react";

function Exercise1(){
     const [count,setCount]=useState(0);

     function increment(){
        setCount((prev)=>{
            return prev+1;
        })
     }
    function decrement(){
        setCount((prev)=>{
            if(prev<=0)return 0;
            else{
                return prev-1;
            }
        })
    }

    const [val,setVal]=useState(0);
    return(<>
    <div className="h-screen w-full bg-black text-white flex px-10 items-center justify-between">
        <div className="decrement ">
            <button onClick={decrement} className="btn border px-7 py-5 rounded-[50%]">-</button>

        </div>
        <div className="display text-9xl">
            <h1 className="">{count}</h1>

        </div>
        <div   className="increment">
            <button onClick={increment} className="btn border px-7 py-5 rounded-[50%]" >+</button>

        </div>

    </div>
    
    </>)
}
export default Exercise1;




