const http = require('http')

const userData = [
    {
        name : "abc",
        age : "20",
        email : "abc@gmail.com"
    },
    {
        name : "def",
        age : "21",
        email : "def@gmail.com"
    },
    {
        name : "ghi",
        age : "19",
        email : "ghi@gmail.com"
    }
]

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json")
    res.write(JSON.stringify(userData))
    res.end()
})

server.listen(4900)