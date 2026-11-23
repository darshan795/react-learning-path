import React from 'react'
import {useState} from "react";

/*
==================================================
                 CUSTOM HOOKS (REACT)
==================================================

WHAT ARE CUSTOM HOOKS?
- Custom hooks are our own functions that allow us
  to reuse React logic across different components.
- They can use built-in hooks like useState,
  useEffect, useContext, etc.

WHY DO WE USE CUSTOM HOOKS?
- Avoid repeating the same logic in multiple components.
- Keep components cleaner and easier to maintain.
- Reuse stateful logic across different components.
- Separate logic from UI.

HOW TO CREATE A CUSTOM HOOK?
1. Create a normal function.
2. Its name must start with "use".
   Example: useCounter(), useToggle(), useFetch().
3. Use React hooks inside it when needed.
4. Write reusable logic.
5. Return the values/functions that components need.

HOW TO USE IT?
- Call the custom hook inside a React component.
- Receive its returned values using destructuring.
- Use those values and functions inside the component's UI.

EXAMPLE FLOW:

  useCounter()
       |
       |-- useState() -> stores count
       |-- increment() -> increases count
       |-- decrement() -> decreases count
       |-- reset()     -> resets count
       |
       v
  Returns { count, increment, decrement, reset }
       |
       v
  Component uses the returned values/functions
  to display and control the UI.

IMPORTANT RULES:
- Custom hook names must start with "use".
- Hooks must be called at the top level of a
  React component or another custom hook.
- Custom hooks share LOGIC, not STATE.
- Each component calling the same custom hook
  gets its own independent state by default.
- Custom hooks do not automatically optimize
  performance; they improve reusability and
  maintainability.

MORAL:
Write reusable React logic once inside a custom
hook and use it wherever required instead of
repeating the same logic in multiple components.

==================================================
*/

function Exercise5() {
  
  return (
      <><Counter/></>
  )
}


function useCounter(val){
  //this is the case for it mother fucker we are learning it from the chat gpt
  const [count,setCount]=useState(val);
  
  const decrement=()=>{
    
      setCount(prev=>prev-1);
    
    
  }

  const increment=()=>{
    setCount((prev)=>prev+1);
  }

  const reset=()=>{
    setCount(0);
  }

  return {count,decrement,increment,reset};

}

function Counter(){

  const {count,decrement,increment,reset}=useCounter(1);


  return <>

  <h2> Counter {count}</h2>
  <button  className='px-10 py-4 border rounded-[50%]' onClick={increment}>+</button>
  <button  className='px-10 py-4 border rounded-[50%]' onClick={decrement}>-</button>
  <button className='px-10 py-4 border rounded-[50%]' onClick={reset}>Reset</button>

  
  </>

}


export default Exercise5  