import React, { Component } from 'react';
import Header from './Components/Header/Header'
import ChatList from './Components/ChatList/ChatList'
import ChatBox from './Components/ChatBox/ChatBox'

import {sendMessage,recieveMessage} from "./socket-client.js"
import './App.css';
//const io = require('socket.io-client')  


//const socket = io.connect("http://localhost:5000")





class App extends Component {


  state = {

  message:  '',

  user: {
    name:"Alwin",
    messages: []

},
  
 }



 

 

 

  onChange = (event) =>{
   
  this.setState({message:event.target.value});
     

  }
  onEnterPress = (e) => {

  //if(e.key==='Enter'){

    

   sendMessage(this.state.message);


   //}

  }
  
componentDidMount(){
  this.onEnterPress = this.onEnterPress.bind(this)



  recieveMessage(this);
  




  

  
   
}
componentDidUpdate(){

  console.log(this.state.user.messages);
}

  render() {
    return (
      <div className="flex-item">
      <div className = 'header-div'>
         <Header/>
      </div>
       <div className = 'chat-div'>
        <div className = "chatlist-div">
       <ChatList/>
        </div>
        <div className = 'chatbox-div'>
         <ChatBox onChange = {this.onChange} onEnterPress = {this.onEnterPress} user ={this.state.user} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
