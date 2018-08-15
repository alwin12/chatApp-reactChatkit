import React from 'react'
import {ThemeProvider
} from '@livechat/ui-kit'

import Msg from "../Msg/Msg"

import NameBar from "../NameBar/NameBar"
import Scroll from "../Scroll/Scroll"

import InputField from '../InputField/InputField'
import "./ChatBox.css"

 const ChatBox = (props) => {





return (

<div>

  <ThemeProvider>

<div className ="flex-item">

   <NameBar />
   
   
  <Scroll>
  <Msg messages = {props.user.messages}/>
  </Scroll>
  
  
 <InputField onEnterPress ={props.onEnterPress} onChange = {props.onChange}/>
 
</div>

</ThemeProvider>
  
</div>

	)

 

 }


 export default ChatBox