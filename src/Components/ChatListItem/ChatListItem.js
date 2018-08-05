import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({name,img,message}) => {


return (

<div className ="chatlist-item">
  <div>{name}</div>
  <div>{img}</div>
  <div className ="ellipsis">{message}</div>
</div>


	)



}

export default ChatListItem