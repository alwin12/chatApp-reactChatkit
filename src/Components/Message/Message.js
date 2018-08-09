import React from 'react'
import {

Row,Avatar,MessageText
} from '@livechat/ui-kit'


const Message = () => {



	return (


 

  <Row >
  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Message isOwn deliveryStatus="seen">
  <MessageText style={{backgroundColor:"red",borderRadius:"5px"}}>Hi! this is my first test i love you so much </MessageText>
  </Message>
  </Row>



		)
}


export default Message;