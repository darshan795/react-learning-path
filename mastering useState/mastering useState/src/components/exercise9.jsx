import React ,{useState}from "react";
import { CiCirclePlus } from "react-icons/ci";


function Exercise9(){
    const [isVisible,setVisible]=useState(true);
    
    const [question,setQuestion]=useState([{
        id:1,
        question:"what is trading?",
        ans:"it is a fantastic skill which  can be praticed",
        status:false
    },
   {id:2,
    question:"what is coding ? ",
    ans:"an art of using the machines",
    status:false

   } ,{
    id:3,
    question:"what is  dsa ?",
    ans:"an art of  understanding the logics of  the fucking thing mother fucker!!",
    status:false
   }])
   question.map((q)=>{
    console.log(q.question)
    console.log(q.ans)

   })
    
    

    return <>
    <div className=" bg-zinc-200 h-screen w-full  flex justify-center items-center ">
        <div className="faq  w-120  flex flex-col gap-2 ">
            <div className="question px-10 py-3 bg-white  rounded-[50px] flex justify-between items-center   ">
                this is the games <div><CiCirclePlus className="text-2xl" /></div>

            </div>
            <div className="answers px-10 py-3 bg-white w-120   ">
                this  is  the  new answers

            </div>

        </div>
    </div>
    
    </>
}

export default Exercise9;
