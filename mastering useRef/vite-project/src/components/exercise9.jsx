import React  from "react";
import {useState,useMemo,useRef,useEffect} from "react";


function Exercise9(){
    const [number,setNumber]=useState(0);
    const [name,setName]=useState("");
    
    const val=useMemo(()=>{
        return number*number;
    },[number])
    
    return  (<>

    <h1> Counter  :  {number}</h1>
    <button  onClick={()=>{setNumber((prev)=>prev+1)}}>increase</button>
    <h1>{name}</h1>
    <h1> memeoized val {val}</h1>
    <button onClick={()=>{setName("darshn")}}>CHange Name</button>
    
    </>)

}
export default Exercise9;
