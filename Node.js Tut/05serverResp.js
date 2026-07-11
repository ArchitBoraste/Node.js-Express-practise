const http = require('http')

const age = 20
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")

    //add backticks to be able format in the following manner
    res.write(`
        <html>
        <head>
           <title>Server Resp</title>
        </head>
        <body>
        <h1>Hello World</h1>
        <h2>`+age+`</h2>
        <h2>`+new Date()+`
        </body>
        </html>
        `)
    res.end()
})

server.listen(4800)