const http = require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
    console.log(req)
})

server.listen(port)