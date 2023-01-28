import React from 'react'
import "./Join.css"
import {Link} from "react-router-dom"
import { useState } from 'react';
let user;
const handleName=()=>{
    user=document.querySelector(".inputname").value
    
}
const Join = () => {
const [name, setName] = useState("")

  return (
    <div className='joinPage'>
        <div className="joinContainer">
            <img className="logo" src="./image/logo.png" alt="logo" />
            <h1>S<span className='logo'>chat</span></h1>
            <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} 
               className='inputname' />
           <Link onClick={(event)=>!name?event.preventDefault():null} to="/chat"><button className='log_btn' 
              onClick={handleName}>submit</button></Link> 

        </div>
    </div>
  )
}

export default Join
export {user}