import React from 'react'
import ChatListItem from '../ChatListItem/ChatListItem'
import './ChatList.css'

// note: this array is for testing purposed only 
const chatListArray = [

	{name: 'Alwin',img: 'imagelink',message: 'howdy'},
	{name: 'Jewel',img: 'imagelink2',message: 'dude i got this awesoem thing down the street yesterday'},
	{name: 'alex',img: 'imagelink3',message: 'what time will u reach?'}

]       


const ChatList = () => {


	const chatListItems = chatListArray.map((item)=>{



		return <ChatListItem name = {item.name} img = {item.img} message = {item.message}/>
	})

return (

   <div className ="chatlist-items">
      {chatListItems}
      </div>


	)



}


export default ChatList