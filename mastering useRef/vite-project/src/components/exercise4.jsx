import React  from "react";
import {useState,useEffect,useRef} from "react";

function Exercise4(){
    const [timer,setTimer]=useState(0);
    const timeRef=useRef(null);


    useEffect(()=>{
        // timeRef.current=setInterval(()=>{
        //     setTimer((prev)=>{
        //         return prev+1;

        //     })

        // },1000);

        return ()=>{
            clearInterval(timeRef.current);
        }





        

    },[]);

    const start=()=>{

        if(timeRef.current==null){

        
         timeRef.current=setInterval(()=>{
            setTimer((prev)=>{
                return prev+1;

            })

        },1000);
    }else{
        console.log("don't mother fucker")
    }


    }

    
    const stop=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;   
    }
   
    const reset=()=>{
        stop();
        setTimer(0);
    }

    



    


    return <>
    <div className="timer flex flex-col items-center gap-20">
        <div className="display text-[50px]">
            Timer : {timer}
        </div>
        <div className="buttons flex flex-col  w-30 gap-4">
            <button onClick={start} className="btns bg-blue-300 px-3 py-1">Start</button>
            <button  onClick={stop} className="btns bg-blue-300 px-3 py-1">Stop</button>
            <button  onClick={reset} className="btns bg-blue-300 px-3 py-1">Reset</button>
        </div>
    </div>

    </>
}
export default Exercise4;
