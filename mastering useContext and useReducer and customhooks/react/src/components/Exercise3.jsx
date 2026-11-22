import React from 'react'
import {useReducer,createContext,useContext} from "react";

const userContext=createContext();
const intialState=0;

function reducer(state,action){
    if(action.type=="INC"){
        return state+1;
    }
    if(action.type=="DEC"){
        return  state-1;
    }
return state;
}



function Exercise3(){
    //this is  the concepts that we have follow and solve motherfuckerr


  return (
   <>
    <userContext.Provider value={{intialState,reducer}}>
   <Pratice/>
   </userContext.Provider>
   </>
  )
}

function Pratice(){

    const {intialState,reducer}=useContext(userContext);

    const [state,dispatch]=useReducer(reducer,intialState);




    return (<>

    <h1> this is the basic  pratice case of  the useReducer</h1>

    <h1>the state is {state}</h1>

    <button  onClick={()=>dispatch({type:"INC"})}>
        increment
    </button>

    <button onClick={()=>dispatch({type:"DEC"})}>
        decrement--
    </button>


    
    </>)
}


export default Exercise3