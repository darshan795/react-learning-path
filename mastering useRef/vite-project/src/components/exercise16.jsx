import React from 'react'
import Exercise16ii from './exercise16ii'
import {useState} from "react";
function Exercise16() {
    const [data,addData]=useState([]);
    const [input,setInput]=useState("");


  
    const handleClick=(e)=>{
        console.log("hello  motherfucker");
        setInput(e.target.value);
        console.log(input);


    }
   
  return (<>

    <div>exercise16</div>
    <div className=''>
        <input className='px-2 py-2  border' onChange={(e)=>{handleClick(e)}}  value={input} placeholder="enter the task mother fucker!!">
        </input>
    
    </div>
    <br></br>

    <Exercise16ii data={data}  input={input}  addData={addData}/>
    </>
  )
}

export default Exercise16