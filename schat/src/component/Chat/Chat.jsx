import React from 'react'
import {user} from "../Log/Join"
import "./Chat.css"
import socketIo from "socket.io-client"
import { useEffect } from 'react'
let chatlink='http://localhost:4001'
const Chat = () => {
  const socket=socketIo(chatlink,{transports:['websocket']})
useEffect(()=>{
  socket.on('connect',()=>alert("connected"))
return ()=>{}
},[])
  return (
    <div className='chatPage'>
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>
        <div className="inputBox">
          <input type="text" className="chatInput" placeholder='write something'/>
          <button className="send_btn">send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat