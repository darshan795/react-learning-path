import React  from "react";
import {useState,useRef,useEffect} from "react";

function Exercise8(){

    const [msgs,setMsg]=useState([]);
    const input=useRef(null);
    const display=useRef(null);


    const sendMsg=()=>{
       
        let msg=input.current.value;
        if(input.current.value!=""){
             setMsg((prev)=>{
            return [...prev,msg];
        })

        }
       
        input.current.value="";

       
    }

    const handleScroll=()=>{
        
        console.log(display.current)
        display.current.scrollTop+=100;

        
    }

    

    
    return (<>
    <div className=" display px-20 py-20">
    <div className=" main  h-[480px] bg-black rounded-[20px]  px-6 py-10  w-[400px] flex flex-col gap-4   ">
        <div  ref={display} className="chatbox bg-zinc-200 h-[85%] px-2 py-2   flex flex-col gap-2 overflow-auto">

            <div className="messages    w-[300px] px-4  py-4 bg-white rounded-[20px] overflow-x break-words">  <h1>Messages</h1>
            </div>
            {msgs.map((data,index)=>{
                return <> <div key={index} className="messages    w-[300px] px-4  py-4 bg-white rounded-[20px] overflow-x break-words">  <h1>{data}</h1>
            </div></> 

            })}
         

        </div>
        <div className="inputs">
            <input  ref={input} className="border  rounded-[10px] bg-white px-4 w-[352px] py-2" placeholder="Enter the  messages motherfucker@!!"></input>

        </div> 
        <div className="buttons flex gap-2">
            <button  onClick={sendMsg} className="bg-green-400 px-3 py-1 rounded-[20px]">Send</button>
            <button  onClick={handleScroll}className="bg-green-400 px-3 py-1 rounded-[20px]">Scroll down </button>

        </div>

    </div>

</div>

    </>)
}

export default Exercise8;
