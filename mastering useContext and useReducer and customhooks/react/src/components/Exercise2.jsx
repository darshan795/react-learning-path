import React, { use } from 'react'
import {useContext,createContext} from "react";
import {useState} from "react";

const lightContext=createContext();
/*
========================================
       useContext() - THEME SWITCHER
========================================

1. createContext()
   -> Creates a context to share data.

2. Provider
   -> Makes data available to child components.

3. value
   -> Shares light and setLight through Context.

4. useContext()
   -> Accesses shared context data without prop drilling.

5. useState()
   -> Maintains the theme state.

6. State Update
   -> setLight(prev => !prev) toggles the theme.

DATA FLOW:

ThemeSwitcher (Parent)
       |
       v
ThemeContext.Provider
       |
       |------ Navbar (reads light)
       |
       |------ Main (reads light, updates light)

IMPORTANT:
- Context avoids unnecessary prop drilling.
- Provider must wrap the components that consume it.
- Updating context state re-renders its consumers.

========================================
*/

function ThemeSwitcher() {
  
  const [light,setLight]=useState(true);


  return (

    <>
    <lightContext.Provider value={{light,setLight}}>
    <Navbar/>
    <Main/>

    </lightContext.Provider>
    </>
  )
}


function Navbar(){


  const {light}=useContext(lightContext);

  return <>

  <div className={`navbar w-full  px-4 py-5 ${light?"bg-black text-white":"bg-gray-400 text-black"} `}>
    this is the navbar game!!
    </div>



  </>
}


function Main(){
  const {light,setLight}=useContext(lightContext);
  const handleClick=()=>{
    setLight((prev)=>!prev);
  }



  return <>


  <div className={`main w-260     ${light?"bg-black text-white":"bg-zinc-400 text-black"}`}>

    //this is  the main section

    <button  onClick={handleClick} className=" border px-2 py-3 ">{light?"Dark":"Light"}</button>

  </div>
  
  </>
}





export default ThemeSwitcher