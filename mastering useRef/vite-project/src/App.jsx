import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import Exercise12 from './components/exercise12'
import Exercise13 from './components/exercise13'
import Exercise14 from './components/exercise14'
import Exercise15 from './components/exercise15'
import { useCallback } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const handleClick=useCallback(()=>{
    setCount((prev)=>prev+1);
    // console.log("bttn is clicked!!!");
  }
  ,[])
  const [name,setName]=useState("darshan");

  const changeName=()=>{
    setName("hardworking millionare");
    
  }
  console.log("parent is called   here  buddy");

  
  return (  
    <>


    <h1> Counter : {count}</h1>
    <button  className="btns px-2 py-2 bg-green-300" onClick={changeName} >Change name</button>
    
    {/* <Exercise14  handleClick={handleClick}/> */}
    <Exercise15 handleClick={handleClick} name={name}/>
    
     
    </>
  )
}

export default App
