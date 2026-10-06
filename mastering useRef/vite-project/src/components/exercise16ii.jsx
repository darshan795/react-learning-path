import React from 'react'

function Exercise16ii({data,addData,input}) {
     const manageTask=()=>{
        addData((prev)=>{
        return [...prev,input];
            
        })
        
    }
  
    

  return (
   <><div > {data.map((ele)=>{
            return <>{ele}</>

   })}
   <button className="px-3 py-2 bg-green-300 border  rounded-[20px]" onClick={manageTask} >Add Task</button>
   
   </div></>
  )
}

export default Exercise16ii