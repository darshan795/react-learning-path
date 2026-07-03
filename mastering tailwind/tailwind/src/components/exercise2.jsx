import React from "react";
import Exercise1 from "./exercise";

function Exercise2(){
    return <>
    <div className="card h-50 w-50 bg-blue-100  flex flex-col justify-center items-center gap-4 rounded-[10px] shadow-md hover:shadow-2xl hover:scale-102">
        <div  className="header">
            <h1> Darshan</h1>

        </div>
        <div class="description">
            <p>
                Darshan Rout
            </p>
            <p>React Developer</p>

        </div>
        <div className="buttons">
            <Exercise1 text="follow"/>
        

        </div>

    </div>
    </>
}
export default Exercise2;
