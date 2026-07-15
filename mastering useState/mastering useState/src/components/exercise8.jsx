    import React ,{useState} from "react";

    //Exercise 8is about  theme Dashboard 
    import Card from "./exercise8ii";

    function Exercise8(){
        const [mode,setMode]=useState(false);
        function handleClick(){
            setMode((prev)=>!prev)
            console.log("btn clicked!!")
            console.log(mode)
        }
        return <>
        
        <div className={`${mode?"bg-white text-black":"bg-black text-white"} main font-[poppins]   h-screen w-full flex flex-col justify-center items-center gap-10`}>
            <div className="header text-[30px]">
                <h1>Welcome Darshan</h1>
                <h2>{mode?"Light Mode":"Dark Mode"} </h2>

            </div>
            <div className="body text-[20px] flex flex-col  gap-4">
                <Card  className={"shadow-md shadow-zinc-500"}/>



            </div>
            <div className="buttons">
                <button className={`btns border px-2 py-2 rounded-[20px]`} onClick={handleClick}>Enable {mode?"Dark":"Light"} Mode</button>


            </div>
            
        </div>
        </>
    }

    export default Exercise8;
