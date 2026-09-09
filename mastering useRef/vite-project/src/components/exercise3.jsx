import React  from "react";
import {useState,useEffect,useRef} from "react"

function Exercise3(){

    const [count,setCount]=useState(0);
    const Ref=useRef(0);
    


    const increase=()=>{
        setCount((prev)=>{
            return prev+10


        })
    }
    useEffect(()=>{
        Ref.current++;
        
        console.log("causing the render again  and again !!")


    })



    return <>
    <div className="render-counter">

        <h1> Render counter</h1>
        <h1>
            Count :{count}
        </h1>
        <h1> Renders: {Ref.current} </h1>

        <button  onClick={increase} className="btns bg-blue-300 px-3 py-1 border  "> increase count++</button>

      <button className="btns bg-blue-300 px-3 py-1 border  ">Change  Ref++</button>


    </div>
    


    </>

}

export default Exercise3;