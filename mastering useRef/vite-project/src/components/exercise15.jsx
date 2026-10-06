import React from 'react'
import {memo} from "react";

function Exercise15({handleClick,name}) {

console.log("child is called  gabru")
  return (

    <><button onClick={handleClick} className="btns px-2 py-2 bg-red-300 ">  increase </button>
    <h1>{name}</h1>
    </>
  )
}

export default memo(Exercise15);