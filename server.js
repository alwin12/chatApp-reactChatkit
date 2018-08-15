
const server = require('http').createServer()

 const io = require('socket.io')(server)


io.on('connection',(client)=>{


  console.log('client connected')

let msg ="";


 client.on("send",(message)=>{

    console.log("server:",message);

  (() => {

      msg = message;
    client.emit("recieve",msg )

  })()

    

 })

 


})






 server.listen(5000, function(){


	console.log('node app is running on port 3000');
})