import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({name,img,message,onClick}) => {


return (

<div className ="chatlist-item" onClick ={onClick}>

<div className = 'img-name-time-div'>
  <div className='img-name-div'><img src ="../Images/a.png"/><div>{name}</div></div> <div className ="time-div">10:30 PM</div>
</div>
 <div className ="message-div">{message}</div>
</div>


	)



}

export default ChatListItem