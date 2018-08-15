import React from 'react'
import {

Row,Avatar,MessageText,Message
} from '@livechat/ui-kit'


const Msg = (props) => {

     const messages = props.messages.map( msg=>{



     	return (


  <Row >
  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Message isOwn deliveryStatus="seen">
  <MessageText style={{backgroundColor:"red",borderRadius:"5px"}}>{msg} </MessageText>
  </Message>
  </Row>



     		)

     }

     

     	)

	return (


 

      messages



		)
}


export default Msg;