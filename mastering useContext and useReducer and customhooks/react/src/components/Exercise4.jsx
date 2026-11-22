import React from 'react'

/*
====================================
          useReducer()
====================================

1. initialState
   -> Stores the starting state.

2. reducer(state, action)
   -> Decides how state should change.

3. dispatch(action)
   -> Sends an action to the reducer.

4. useReducer()
   -> Returns [state, dispatch].

FLOW:
User Action
    ↓
dispatch()
    ↓
reducer(state, action)
    ↓
Updated State
    ↓
UI Re-render

IMPORTANT:
- Reducers should be pure functions.
- Never directly mutate existing state.
- Return a new state object or array.
====================================
*/

import {useReducer,useContext,createContext,useState} from "react";



const arr=[];
for(let i=0;i<10;i++){
    arr.push(`products${i+1}`);
}


function reducer(state,action){
    if(action.type=="ADD"){
        console.log("hey motherfucker!!")
        console.log(action.payload);
        console.log(action.name)
        // state.push(`${action.name+action.payload}`);
        return [...state,action.name+action.payload];
    }
    return state;
        

}//this is the game motherfucker !!


const userContext=createContext();



const cartarr=[];




function Cart() {
    const [visible,setVisible]=useState(true);
    const [state,dispatch]=useReducer(reducer,cartarr);


    
  return (
    <>
    <userContext.Provider  value={{arr,cartarr,reducer,state,dispatch,visible,setVisible}}>

        <div className={`display relative ${visible?"":" z-40"}`}>
        <Navbar/>
         <Products/>
        <ShoppingCart/>

    </div>
    </userContext.Provider>
    </>
  )
}

function Products(){

    const {arr,cartarr,state,dispatch}=useContext(userContext);
    const handleClick=(event)=>{
        //this 
            dispatch({type:"ADD",payload:`${event.target.id}`,name:'product'})
    }
    return <>       

        <div className="products grid grid-cols-3 gap-10">
                    {
                    arr.map((ele,index)=>{
                        return <div className="card px-10 py-10 border flex   gap-4 justify-center items-center w-60 ">

                            
                            {ele}<button  id={index}   key={index} onClick={()=>handleClick(event)} className=" border px-2 rounded-[50%] py-1">+</button>

                                            {/* <button className=" border px-2 rounded-[50%] py-1">-</button> */}
                                </div>
                                })
                            }

        </div>
    </>


}
function Navbar(){
    const {setVisible,visible,state,dispatch,reducer}=useContext(userContext);
    
    console.log("Navbar")
    const handleClick=()=>{
            console.log("iti is clicked")
            setVisible((prev)=>!prev)
            console.log(visible)
    }

    return <>
    <div className="Navbar w-full  flex  items-center px-10 justify-between h-20 bg-zinc-300 mb-10">

        <div className="icon">
            Navbar
        </div>

        <div  className="cart">
           <button  className="btns border px-2 py-1 rounded" onClick={handleClick}> Mini  Cart </button>
          
        </div>
    </div>
    </>
}

function ShoppingCart(){
      const {setVisible,visible,state}=useContext(userContext);

    return <>
                <div className={`main  px-10 py-10 h-150 w-150 bg-zinc-300  rounded-[20px] box absolute top-[100px] left-[200px] overflow-auto ${visible?"hidden  ":"  z-50"}`}>

                    welcome to the mycart

                    <div className="products">
                        <div className="adding grid grid-cols-2 gap-10 ">{state.map((ele)=>{
                            return <><div className="products  px-10 py-10 border flex   gap-4 justify-center items-center w-60  ">{ele}<button className="border px-2 rounded-[50%] py-1">-</button></div></>
                                            
                        })}</div>
                    </div>
                    
                    
                    </div>   
    </>
    
}


export default Cart;