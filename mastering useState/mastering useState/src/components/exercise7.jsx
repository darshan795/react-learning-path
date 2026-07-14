import React,{useState} from "react";
import { RxCross2 } from "react-icons/rx";
import {useRef} from "react";

//we have to make   the   todo list 




function Exercise7(){
    const [Tasks,setAddTask]=useState([]);
    const inputRef=useRef(null);
    const [isDone,setIsDone]=useState("false");
     console.log(inputRef.current);
    const values="";
    //this is the values that has to be done with the functionalities
    function handleSubmit(event){
        // console.log(event);
     
        setAddTask([...Tasks,inputRef.current.value])
        
        
        inputRef.current.value=""
        
        
    }
    console.log(Tasks)
    function handleClicks(){
        setIsDone((prev)=>{
            return !prev
        })
    }
    



    const tasks=["hey this is new task","this is the brand  new task","completing  the task for the day 3  dddddddddddddd             ddddddddddddn x   x   dddddddddd dddddd dddd dddd ddddddddddd dddddddddd"]

    return <>
    <div  className="main  flex gap-12">
        <div className="todo-list bg-zinc-100  flex flex-col gap-4 px-5 py-5 rounded-[10px] w-80">
            <div className="header">
               <h1  className="text-[18px] font-[600]">To-do List</h1> 
            </div>


            <div  className="input  flex justify-center items-center  relative">


                <input  className=" w-70 px-4 py-2 rounded-[50px] bg-zinc-300  " ref={inputRef}  placeholder="Add the task"></input>
                <button className="btns  px-7 py-2 text-white rounded-[50px] bg-[#DB4C4B]  absolute left-49" onClick={handleSubmit}>Add</button>

            </div>
            <div className="lists flex flex-col gap-2 ">
               
                {Tasks.map((task,idx)=>{
                    return ( <div key={idx} className="options   w-70 flex items-center justify-between px-3 py-2 text-zinc-400">

                <span className="options flex  items-center gap-2   "><input type="checkbox"  onClick={handleClicks}  ></input><p className={`${!isDone?"line-through":""} w-50 h-auto  `} >{task} </p> </span>
                <RxCross2/>
                </div>)


                })}
                
                
         
                


            </div>

        </div>
        <div className="logo mt-10">
            <h1 className="text-white font-[600] text-[45px]">Build</h1>
            <h1 className=" font-[600] text-[45px] text-[#DB4C4B] flex gap-2">To-Do  <p className="font-[600] text-[45px] text-white">List</p></h1>
            <h1 className="text-white  text-[25px]">With React</h1>

        </div>

    </div>
    
     

    </>
}
export default Exercise7;
