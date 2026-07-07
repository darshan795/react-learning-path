import React from "react";
import {useState} from "react";

function Exercise2(){
    const [name,setName]=useState("Guest");  
    let role="";
    let status="";
    let greetings=""
    if(name=="Guest"){
         role="visitors"
        status="Browsing"
        greetings="hey welcome here!!"
                
        
    }else if(name=="darshan"){
          role="Trader"
                status="Trading"
                greetings="welcome back!!"

    }else if(name=="sudeep"){
         role="developer"
                status="coding"
                greetings="good evening dude"
    }else if(name=="millionare"){
         role="developer"
                status="coding"
                greetings="namste dude"
    }else if(name=="topi"){
             role="sde"
                status="working"
                greetings="not welcome"
    }

    
    


    function changeName(){
        
        setName((prev)=>{

            if(prev=="Guest"){
               
                return "darshan"
            }
            else if(prev=="millionare"){
              
                return "Guest"
            }
            else if(prev=="darshan"){
               

                return "sudeep"
            }
            else if(prev=="sudeep"){
                


                return "topi"
            }
            else if(prev=="topi"){
           
                return "motherfucker"
            }
            else{
                

             return "millionare"}
            
        })
    }
    function reset(){
        setName(()=>{   
            return "Guest"  
        })
    }
    return <>

    <div className="display h-screen w-full bg-black text-white  flex flex-col  items-center justify-center gap-18 ">
        <div className="name flex flex-col gap-8">
            <h1 className="text-6xl">{greetings} {name}</h1>
            <h1>Role: {role}</h1>
            <h1>Status:{status}</h1>

        </div>
        <div  className="changename">
            <button  onClick={changeName} className="border px-3 rounded-[25px] ">
                Change Name
            </button>
        </div>
        <div className="reset ">
            <button  onClick={reset}className="border px-3 rounded-[25px]" >Reset</button>
        </div>

    </div>
    </>
}

export default Exercise2;
