import React from 'react'


import {useState,useEffect,useRef,useMemo} from "react";

function Exercise12() {
    const [data,setData]=useState(()=>{
         let newData=[]

    for(let  i=0;i<100;i++){
       newData.push({id:i,name:`product${i+1}`,price:   Math.floor(Math.random() * 901) + 100});
    }
    
    return newData;
    });
   

const result=useMemo(()=>{
      const newarr=[...data];
    newarr.sort((a,b)=>a.price-b.price);
    return newarr;


},[data])
   
const Sort=()=>{
  

}
    
  return (
    <>
    <div className="sorting"><button  onClick={Sort} className="px-2 py-2 border w-50 bg-green-200 flex justify-center mb-10 mt-10 m-4">Sort!!</button></div>
    <div className="main  grid  grid-cols-3 gap-3">
        {
            data.map((ele)=>{
                return <><div className="cards border px-2 py-2 w-60">
                  {ele.id } {ele.name} {ele.price}
        
                </div>
                </>
            })
        }

    </div>
    </>
  )
}

export default Exercise12;