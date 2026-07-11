const express = require('express')
const app = express()

app.get("/users/:id", (req, res)=>{
    res.send(`User id is ${req.params.id}`)
    //say we enter /users/123, we shall get output as "123"

    console.log(req.params)
    //output: {id : '123'} (if we enter /users/123) 
})


//url /flight/MUM/to/DEL
app.get("/flight/:from/to/:to", (req, res)=>{
    res.send(`Flight from ${req.params.from} to ${req.params.to}`)
})


//optional parameters
app.get("/users/:id/:name?", (req, res)=>{
    if(req.params.name){
        res.send(`Hello ${req.params.name} and your id is ${req.params.id}`)
    }
    else{
        res.send(`Hello user with id ${req.params.id}`)
    }
})