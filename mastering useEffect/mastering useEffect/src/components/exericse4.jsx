import React  from "react";
import {useState,useEffect,useRef} from "react";



function Exercise4(){

    const [count,setCount]=useState(0);
    const timeRef=useRef(null);
    
    

    

    
    useEffect(()=>{

    
       return ()=>{
        clearInterval(timeRef.current);   
       }


       
    },[])

    const startTimer=()=>{
        if(timeRef.current!==null){
            return ;
        }



            timeRef.current=setInterval(()=>{
        setCount(prev=>prev+1)
       },1000);


    }


    const stopTimer=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;
    }
   

    return <>
        <div className="timer h-screen w-full  flex flex-col justify-center items-center gap-10">
            <h1  className="text-[30px]">Timer : {count}</h1>
            <div className="start">
                <button   onClick={startTimer} className="btns px-3 py-1 bg-blue-500 rounded-[20px]"> Start</button>
               
            </div>

            <div className="stop">

                 <button  onClick={stopTimer}className="btns px-3 py-1 bg-blue-500 rounded-[20px]"> Stop</button>
               
            
            </div>
             </div>
    </>
}

export default Exercise4;
