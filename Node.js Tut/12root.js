const http = require('http')
const userForm = require('./12userForm.js')
const userDataSubmit = require('./12userDataSubmit.js')

const server = http.createServer((req, res)=>{
    if(req.url=="/"){
        userForm(req,res)
    }
    else if(req.url=="/submit"){
        userDataSubmit(req, res)
    }
    //res.end()
})
server.listen(4900)