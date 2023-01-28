import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
// import socketIo from "socket.io-client"
import Join from './component/Log/Join';
import Chat from './component/Chat/Chat';
// let link="http://localhost:4001"
// const socket=socketIo(link,{transports:["websocket"]})
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Join/>}/>
      <Route path="/chat"  element={<Chat/>} />
      </Routes>
    </Router> 
  );
}

export default App;
