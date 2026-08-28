import { useState } from 'react'

import {useEffect} from "react";
import './App.css'
import Exercise12and3 from './components/exercise1';
import Exercise4 from './components/exericse4';

function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("here is the first useEffect  exercise man!!")

  },[count])
  const handleClick=()=>{
    setCount((prev)=>prev+1);
  }
  

  return <> 
  <Exercise4/>
  </>
  
      
}

export default App
