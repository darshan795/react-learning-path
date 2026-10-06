import React from 'react'
import {memo} from "react";

function Exercise15({handleClick,name}) {
//in this  exercise  we are learning how the child parent relationship exist 
// how they re render it again and again
// but  here in the parent handleClick funciton is under the useCall back
// so it does not create any function  reference  unles until the 
//  it's dependencies  have been changed 
// and more over the thing is the memo checks weather the props of the parent  remain constat
// or change for the child 
// if it is changed then the child will be called again 
// for this reason it checks the value of the both  props  before  rendering 
//if it is changes then it  re rendered lik
// in the case of the name

console.log("child is called  gabru")
  return (

    <><button onClick={handleClick} className="btns px-2 py-2 bg-red-300 ">  increase </button>
    <h1>{name}</h1>
    </>
  )
}

export default memo(Exercise15);