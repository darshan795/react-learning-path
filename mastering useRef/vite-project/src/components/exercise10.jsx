import React from "react";

//this is the case mother fucker
import {useEffect,useState,useRef,useMemo} from "react";


function Exercise10(){
    
const [data,setData]=useState([]);
const [theme,setTheme]=useState(false);




useEffect(()=>{
    
    async function FetchData(){
        try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const d=await response.json();
        setData(d);


        }catch(err){
            console.log("there is a error in this part !!",err);

        }

    }
    FetchData();
    console.log(data);


},[])
//only thing is  remainging is filtering motherfcuerk!!

const handleClick=()=>{
    console.log(theme);
    console.log("btn is clicke!!")
    setTheme((prev)=>{
        return !prev;
    })

    

}


    
    return(<>
    <div className={`main  flex flex-col gap-10 py-10 px-10 ${theme?'bg-black text-white':'bg-white'} `}>
        <div className="inputs">
            <input className="border px-3 py-2 w-120" placeholder="Enter the  name  "></input>

        </div>
        <div className="display grid grid-cols-3 gap-5">
            {
                data.map((ele)=>{
                    return <><h1 className="px-2 py-2 border">{ele.name}</h1></>

                })
            }


        </div>
        <div ><button className="bg-blue-400 px-3 py-1 rounded-[20px]" onClick={handleClick}>change Theme</button> </div>
       

    </div>

    

    </>)
}
export default Exercise10;
//  <button className="bg-blue-400 px-3 py-1 rounded-[20px]" onClick={handleClick}>generate Data</button>