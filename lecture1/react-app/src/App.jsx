//creating  first component;
import React from "react";

import Card from "./components/card";
import "./App.css"
import {useState} from "react";



//mastering the react with the usestate  of the react  i hope you are  getting it motherfucker!!!

function App(){
  
  const [step,setStepCounter]=useState(0)
  function increase(){
    // setStepCounter((prev)=>{
    //   console.log("it has to be done increasing  motherfucker1")
    //   prev=prev+10
    
    // })
    setStepCounter(console.log("this is new step motherfucke"));
  }



  return (

  <>
  <div className="main">
    <h1>stepCounter:  {step}</h1>
    <button  onClick={increase}>increase</button>
    <button>descrease </button>
   
  </div>

 
  </>
  )
             
        


      
  


  
}

export default App;
