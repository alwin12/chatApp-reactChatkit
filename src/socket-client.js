const io = require('socket.io-client')


const socket = io.connect("http://localhost:5000")



export const sendMessage= (message) => {


	socket.emit("send",message)
}

export const recieveMessage = (obj) =>{


  socket.on("recieve",(message)=> {

  
  let newMessages = obj.state.user.messages;

    newMessages.push(message);

   obj.setState(prevState=> ({

    user: {

     ...prevState.user,
      messages: newMessages,

    }
    

   }))

   








  })
}

 