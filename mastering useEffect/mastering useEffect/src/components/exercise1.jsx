import React from "react";
import { useEffect,useState } from "react";

function Exercise1(){

    const [count,setCount]=useState(0);

    const [theme,setTheme]=useState("light");


    const [name,setName]=useState("darshan");
    const increase=()=>{
        setCount((prev)=>{
            prev=prev+1;
              return prev;

        })
    }
    const decrease=()=>{
        setCount((prev)=>{
            prev=prev-1;
            return prev;
        })
    }
    const changeName=()=>{
        setName("sudeep");
    }

    const changeTheme=()=>{
        setTheme("dark");   
    }
    useEffect(()=>{
        console.log('here is the useeffect starts ')
    },[count])

    useEffect(()=>{

        console.log("the name is",name);
        
    },[name])

    useEffect(()=>{
        console.log("the theme is ",theme);
    },[theme])



    return <>
        <div className="counter h-screen w-full   bg-zinc-200 flex justify-center items-center flex-col gap-20">
            <div  className="">
                Count :{count}
            </div>
            <div className="buttons flex gap-10">
                <button  onClick={increase}className="btn bg-blue-500 px-2 py-1 rounded-[20px]">
                    Increase++
                </button>
                 <button   onClick={decrease}className="btn bg-blue-500 px-2 py-1 rounded-[20px]">
                    decrease--
                </button>
            </div>

            <div className="name">
                {name}
            </div>
            <div  className="changeName">
                 <button   onClick={changeName}className="btn bg-blue-500 px-2 py-1 rounded-[20px]">
                 changeName
                </button>

            </div>

            <div className="changetheme">
                <button  onClick={changeTheme}   className="btn bg-blue-500 px-2 py-1 rounded-[20px]">
                 changeTheme
                </button>

            </div>
        </div>


    </>
}

export default Exercise1;
