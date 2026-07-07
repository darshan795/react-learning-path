import  React ,{useState}  from "react";

function Exercise3(){
      const [isOn,setOn]=useState(false);
      function changeState(){
        setOn((prev)=>{
            return !prev;
        })
      }
    return (<>
    <div  className="bg-black h-screen w-full text-white flex  flex-col justify-center items-center gap-20">
        <div className="display">
            <h1 className=" text-4xl"> Wifi</h1>
           

        </div>
        <div className="buttons flex  flex-col gap-4">
            <div className="btns border flex justify-center items-center gap-2    px-3">{isOn?"TURN ON":"TURN OFF"} <div className={isOn?"h-3 w-3 rounded-[50%] bg-green-400 ":"h-3 w-3 rounded-[50%] bg-red-400"} ></div></div>

            <div  onClick={changeState}className=" border py-2  flex justify-center items-center px-2" ><div className="w-18 h-[1px] bg-white"></div> <div className={`h-3 w-3  rounded-[50%]  ${isOn?'-translate-x-20 bg-green-400 ':' bg-red-400'} transition duration-1000`}></div></div>

        </div>

    </div>
        
    </>)
}
export default Exercise3;
