import React from "react";
import{useState,useEffect} from "react";

function Exercise7(){

    //api loading with react commands okay  
    const [users,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
             fetch("https://jsonplaceholer.typicode.com/users")
        .then((res)=>{
            res.json().then((data)=>{setUser(data)   })
        }).catch((err)=>{
            setError(true);
        })
        setLoading(false);

        },2000);
       


    },[])

    if(error){
        return<>Error ...mother fucker!!! </>
    }



    if(loading){
        return <><h1>Loading .... please wait </h1></>
    }
    return <>
        {users.map((data)=>{
                console.log(data)
                return <h1>{data.name}</h1>

        })}


    </>
}

export default Exercise7;
