const http = require('http')

http.createServer((req, res)=>{
  res.write("<h1>Test</h1>")
  res.end("Testing server")
}).listen(4900)

//req-> request, on the client/browser side
//res-> response, sent by server side