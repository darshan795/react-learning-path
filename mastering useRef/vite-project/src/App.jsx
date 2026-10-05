import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import Exercise12 from './components/exercise12'
import Exercise13 from './components/exercise13'
import Exercise14 from './components/exercise14'
import { useCallback } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const handleClick=useCallback(()=>{
    setCount((prev)=>prev+1);
    // console.log("bttn is clicked!!!");
  }
  ,[])
  return (
    <>


    <h1> Counter : {count}</h1>
    <Exercise14  handleClick={handleClick}/>
    
     
    </>
  )
}

export default App
