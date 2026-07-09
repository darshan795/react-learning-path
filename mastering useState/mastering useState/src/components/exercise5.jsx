import React ,{useState} from "react";

function Exercise5(){
    const [word,setCountwords]=useState("");
    const [wc,setCount]=useState(0);
    const [c,setChar]=useState(0);
    
    function  countingWords(event){
        
        setCountwords(event.target.value);
    
         setCount(word.trim()===""?0:word.trim().split(/\s+/).length)
         setChar(word.length)

       
    }



    return  (<> 
    
        <div className="word-counter flex flex-col gap-20  bg-white py-10 px-10 rounded-[50px] ">
            <div className="header text-center  font-[900] text-4xl">
                Word Counter

            </div>

            <div className="input">
                <textarea  placeholder="Enter the words" onChange={countingWords}  className={`bg-white border h-15 w-150 py-4 px-4 resize-none overflow-y-hidden ${c>200?"text-red-500":"text-black"} rounded-[50px]`}></textarea>

            </div>
            <div  className="display  flex justify-center gap-20">


                <div className="Words text-[20px]">
                    Words : {wc}

                </div>
                <div className={`Characters text-[20px] `}>
                    Characters : {c}
                    
                </div>


            </div>

        </div>


    </>)
}

export default Exercise5;
