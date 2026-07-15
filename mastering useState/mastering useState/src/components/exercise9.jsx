import React ,{useState}from "react";
import { CiCirclePlus } from "react-icons/ci";


function Exercise9(){
    return <>
    <div className="main h-screen w-full bg-zinc-300 flex flex-col  justify-center items-center gap-10">
        <div className="header text-[35px] flex flex-col  items-center">
            <h1>Frequently </h1>
             <h1>   Asked Questions</h1>
            
        </div>
        <div className="displays">
            <div className="questions text-[15px] font-[600] bg-[#ECF0FB] w-120 px-5 py-2 rounded-[50px] flex items-center justify-between">hey this one is the question ?<CiCirclePlus className="text-[25px]" /></div>
            <div className="answers bg-white w-120 px-5 py-3 rounded-[10px] text-[12px] text-zinc-700">This is the answers Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Unde nostrum 
                tempora placeat reiciendis! Dolorem omnis dolore 
                explicabo, veritatis aut nam molestias, quod eum, 
                tenetur nesciunt eaque unde minus ab cupiditate.</div>
        </div>


    </div>
    
    </>
}

export default Exercise9;
