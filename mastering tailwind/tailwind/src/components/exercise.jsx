import React from "react";
function Exercise1(props){


    return <>
    <button className="btn bg-blue-500 px-4 text-white  rounded-xl hover:cursor-pointer  hover:scale-105  transition-all duration-250">
        {props.text}
    </button>
    </>
}
export default Exercise1;
