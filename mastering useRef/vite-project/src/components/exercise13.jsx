import React from 'react'


import { useCallback,useState,useRef,useEffect } from 'react'
function Exercise13() {

    // this  exercise is all about the  hook that is useCallback;
    //here we  are understanding the useCallBack  with  the basic  understanding 
    //of the usecall back and why function is created again and again


    const funcn=useRef(null);
    const [counter,setCounter]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("btn is clicked");

        setCounter((prev)=>prev+1);
    },)

    useEffect(()=>{
 funcn.current=handleClick
 
},[handleClick])
console.log(funcn.current==handleClick);

    
   
  
  return (
        <>
        <div className=" counter">
            
            {counter}
            <div className="btn">
                <button className="btns px-2 py-2 border rounded  bg-blue-200" onClick={handleClick}>Addd</button>
            </div>
        </div>
        </>

  )
}

export default Exercise13