import express from 'express'
import path from 'path'
const app = express()

app.get("/", (req,res)=>{
    res.sendFile(path.resolve('example_html/09home.html'))
})

app.get("/greet", (req, res)=> {
    const name = req.query.name
    res.send(`Hello ${name}`)
})

app.listen(4900)