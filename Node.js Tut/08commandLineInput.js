const http = require('http')
const input = process.argv
let port = input[2]

const server = http.createServer((req, res)=>{
    res.write("Testing input from cmd")
    res.end()
})

server.listen(port)