import React  from "react";
import {useState,useRef} from "react";
function Exercise5(){

    const scrollRef=useRef(null);



    const messages = [
  "Hey! How are you doing?",
  "Good morning! Have a great day.",
  "What are you working on today?",
  "Let's catch up soon.",
  "Did you complete your project?",
  "I just learned something new!",
  "Can you help me with this problem?",
  "That's an amazing idea!",
  "See you tomorrow.",
  "Keep up the good work!",
  "Have you tried the new feature?",
  "I'm excited about this project.",
  "Let's work together.",
  "Thanks for your help!",
  "Everything is going smoothly."
];

const handleScroll=()=>{
    console.log(scrollRef.current.clientHeight);
    console.log(scrollRef.current.scrollHeight);
    console.log(scrollRef.current.scrollTop);
    scrollRef.current.scrollTop+=200;


    


}
    
    return <>
    darshan  motherfucker !!

    <div  ref={scrollRef}className="autoscroller flex bg-blue-200   h-[300px] overflow-auto flex-col gap-4 ">
        {
            messages.map((data)=>{

                return <>  <div className="messages bg-zinc-200 px-2 py-4  border  border-white px-10 ">
                    {data}

       </div>
                </>

            })




       
}

    </div>
    <div  onClick={()=>{handleScroll()}} className=" w-full   py-4 flex justify-center"><button className="scrollbar  bg-blue-400  border rounded-[20px] px-3 py-1">Scroll down</button></div>

    
    </>
}
export default Exercise5;

