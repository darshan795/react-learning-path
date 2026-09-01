import React from "react";
import {useState,useEffect} from "react";

function Exercise8(){
   
    const [id,setId]=useState(1);
    const [user,setUsers]=useState({});
    const [error,setError]=useState(false);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            res.json()
            .
            then((data)=>{
                setUsers(data);
            })

    
        }).catch((err)=>{
            setError(true);


        })

        
        console.log("id of the users are",id);
        console.log(user)
    },[id])

    if(error){
        return <h1>Error while  fetching the data from the api's </h1>
    }





    return (<>

    <div className="user  Dashboard h-screen w-full bg-zinc-200 flex  flex-col items-center gap-10">
        <div className="user selection flex   flex-col gap-4">
            <h1 className="text-[30px]"> Select the users buddy!!</h1>
            <select value={id}  onChange={(event)=>{setId(event.target.value)}}className="border py-2 px-2 ">
                <option value="1">1</option>
                <option  value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option  value="9">9</option>
                <option value="10">10</option>

            </select>

        </div>

        <div className="user display">
            {
                <div >
               <h1>{user.name}</h1>
               <h1>{user.email}</h1>
               <h1>{user.phone}</h1>
               <h1>{user.website}</h1>
               </div>
            }

        </div>
        

    </div>
    

    </>)
}

export default Exercise8;
