    import React,{useState} from "react";
    function Card(props){

        return <>
        <div     style={{
            background:"linear-gradient(to bottom,#F9694E 40% ,white 40%)"
        }}className={` ${props.className} card w-[200px] bg-white  rounded-[10px] text-zinc-400 text-[20px] flex flex-col justify-center  gap-6 items-center px-2 py-5 `}>
            <div className="header">
                <img  className=" mt-2 h-[80px] w-[80px] shadow-[20px] shadow-zinc-400 rounded-[50%]"src="https://i.pinimg.com/736x/4f/83/fd/4f83fdaafe3833aa56e73d4c5e36f6b1.jpg"></img>

            </div>
            <div className="body">
                <div className="informations text-[15px]">
                    <h1>About : </h1><p>Hey this is  darshan!!</p>
                    
                    
                </div>


            </div>

        </div>
        </>

    }

    export default Card;
