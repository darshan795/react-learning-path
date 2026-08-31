import { useState } from 'react'

import {useEffect} from "react";
import './App.css'
import Exercise12and3 from './components/exercise1';
import Exercise4 from './components/exericse4';
import Exercise5 from './components/exercise5';
import Exercise6 from './components/exercise6';
function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("here is the first useEffect  exercise man!!")

  },[count])
  const handleClick=()=>{
    setCount((prev)=>prev+1);
  }
  

  return <> 
  <Exercise6/>
  </>
  
      
}

export default App
