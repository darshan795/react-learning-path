import React from 'react'
import {memo,useCallback} from "react";

function Exercise14({handleClick}) {
    //in this exercise  we seeing how the child is rerendered  again and again 
    //when the parent  is component  is clicked again this
    //is the scenario
    //buddy
    console.log("hello mother fucker!!")

  return (
    <button onClick={handleClick} className="btns px-3 px-2 rounded bg-green-300">Increase</button>
  )
}

export default memo(Exercise14);
