import {useState,useRef,useMemo,useEffect} from "react";

function Exercise11(){
    ///this exercis is useMemo plus large list
    //we will be seen when there is another state  and  rerun the component
    //how does  useMemo prevent doing the expensive and time taking  calculatios


    const [input,setInput]=useState("");
    const handleInput=(event)=>{
        setInput(event.target.value);
        console.log(input);

    }

    const [dark,setDark]=useState(false);
   





    const products = Array.from({ length: 10000 }, (_, index) => {
    return `Product ${index + 1}`;


});

// console.log(products);

const handleClick=()=>{
    setDark((prev)=>!prev);
    console.log(dark);

}
const filter=useMemo(()=>{
    return products.filter((ele)=>{
    return ele.includes(input);
})
},[input]);



console.log(filter)




    return (<>
    <div className="main   px-10 py-10 flex flex-col gap-4">
        <div className="search flex   gap-4">
            <input  value={input} onChange={(event)=>{handleInput(event)}} className="border w-120 px-2 py-2" placeholder="Search the items  here "></input>
            <button  onClick={handleClick} className="btns border px-3 py-1 bg-blue-300">Dark or light</button>
        </div>
        <div className="display grid  gap-4 grid-cols-3">
            {filter.map((data)=>{
                return <h1 className="border px-2 py-2">{data}</h1>
            })}

        </div>

    </div>


   

    </>)
}
export default Exercise11;