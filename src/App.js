import React, { Component } from 'react';
import Header from './Components/Header/Header'
import ChatList from './Components/ChatList/ChatList'
import ChatBox from './Components/ChatBox/ChatBox'


import './App.css';

class App extends Component {
  render() {
    return (
      <div >
      <div className = 'header-div'>
         <Header/>
      </div>
       <div className = 'chat-div'>
        <div className = "chatlist-div">
       <ChatList/>
        </div>
        <div className = 'chatbox-div'>
         <ChatBox/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
