  import React from 'react'
  

  import { createContext ,useContext,useState} from 'react'
  import ThemeSwitcher from './components/Exercise2';
  import Exercise3 from './components/Exercise3';
  import Cart from './components/Exercise4';
  
  const userContext=createContext();


  function App() {

    const [username,setUsername]=useState("Darshan");
    
    const data=[
      {
        name:"death in hand",
        id:12,
        designs:"nothing in  need"
      }
    ]


    return (


    <><Cart/></>
    )
  }


  function Navbar(){

    //using the data using the useContext;

    const {username}=useContext(userContext);




    return (<>
      <h1>  hello mother  fucker  here is the  key to success  mother fucker this is navbar  bastartd</h1>

      <h1>{username}</h1>


    
    </>)
  }

  function Child(){

  const {data}=useContext(userContext);

    return <>
    <h1> hello  mother fucker this is the case  that we have to face it mother fucker !!</h1>

    {data.map((ele)=>{
      return <h1>{ele.name}</h1>
    })}

    </>
    //now it is  working mother fucker

  }
  export default App