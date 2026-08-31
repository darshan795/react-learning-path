import React from "react";
import {useState,useEffect} from "react";

function Exercise6(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        //here i will be  giving the fetch request for the api's
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            res.json().then((data)=>{
                setUsers(data);

            })
        })

        console.log(users)

    },[])



    return <>
    <div className="fetching the data flex   flex-col justify-center items-center gap-10">
        {users.map((data)=>{

            return  <div className="mini Card bg-zinc-200 py-2 px-2  border w-60 flex flex-col gap-2">

            <div className="name">
                {data.name}



            </div>
            <div className="email">
                {data.email}

            </div>
            <div  className="phone">
                {data.phone}


            </div>
        </div>

        })}

       
        

    </div>
    </>
}

export default Exercise6;
