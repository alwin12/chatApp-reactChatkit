import React from 'react'
import {ThemeProvider
} from '@livechat/ui-kit'

import Message from "../Message/Message"

import NameBar from "../NameBar/NameBar"

 const ChatBox = () => {





return (

<div>
<ThemeProvider>
<div>
   <NameBar/>

  //scroll
  <Message/>
  //scroll

  </div>

</ThemeProvider>

</div>

	)

 

 }


 export default ChatBox