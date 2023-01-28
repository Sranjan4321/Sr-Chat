const http=require("http")
const exprss=require("express")
const socketIo=require("socket.io")

const PORT=4001||process.env.PORT
const app=exprss()

app.get("/",(req,res)=>{
    res.send("server is running good")
})
const server=http.createServer(app)

const Io=socketIo(server)

server.listen(PORT,()=>{
    console.log("server is running on PORT",PORT)
})

