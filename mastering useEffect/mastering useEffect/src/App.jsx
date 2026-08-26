import { useState } from 'react'

import {useEffect} from "react";
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("here is the first useEffect  exercise man!!")

  },[count])
  const handleClick=()=>{
    setCount((prev)=>prev+1);
  }
  

  return <> 
  <h1> here is the count  {count}</h1>
  <button  onClick={handleClick} className="btn bg-blue-500 px-3 py-1 rounded-[20px]">increase++</button>

  </>
  
      
}

export default App
