import React ,{useState} from "react";
import {useRef} from "react";
import {FaEye,FaEyeSlash,FaUser} from "react-icons/fa";
import { CiUnlock } from "react-icons/ci"




function Exercise4(){
    const [password,setPassword]=useState(false);
    function handleClick(){
        console.log("the buttons is getting  clicked  motherfucker!!")
        console.log(password)
        setPassword((prev)=>{
            return !prev

        })
    }
    
    
    

    


    return (<>
    <form   style={{
        background:"linear-gradient(135deg, #16796F 15% ,#0B2024 85%)"
    }} className="login form h-80 w-80 flex  flex-col justify-center items-center gap-10">
        <div  className="header text-2xl font-bold">
           User Login 
        </div>
        <div className="username flex justify-center items-center relative ">
            <FaUser className="text-[25px] border h-8 w-8 px-2 py-1 rounded-[50%] absolute left-0"/>
        <input className="border py-1 pl-10 rounded-[50px] " placeholder="Enter the name"></input>

        </div>

        <div className="password flex  justify-center items-center relative">
            <CiUnlock  className="border text-[25px] h-8 w-8 px-2    py-1 rounded-[50px] absolute left-0 "/>
            <FaEye  className="absolute left-[88%] cursor-pointer"></FaEye>
            <FaEyeSlash   onClick={handleClick}className={`absolute left-[88%] cursor-pointer ${password?"opacity-0":"opacity-100"}`}/>
        <input type={password?"text":"password"}  className="border pl-10 py-1  rounded-[50px]"placeholder="Enter the passwod"></input>

        </div>
        <div   className="submit">
            <button className="btns border hover:text-black hover:bg-white px-20 py-1 rounded-[50px]">
                Submit

            </button>


        </div>
    </form>
    

    </>)


   

}
export default Exercise4;
