import { useState } from 'react'

import {useEffect} from "react";
import './App.css'
import Exercise1 from './components/exercise1';

function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("here is the first useEffect  exercise man!!")

  },[count])
  const handleClick=()=>{
    setCount((prev)=>prev+1);
  }
  

  return <> 
  <Exercise1/>
  </>
  
      
}

export default App
