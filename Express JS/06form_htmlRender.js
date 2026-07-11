import express from 'express'
import path from 'path'
const app = express()

app.get("",(req, res)=>{
    res.sendFile(path.resolve('html/home.html'))
})
app.get("/about",(req, res)=>{
    res.sendFile(path.resolve('html/about.html'))
})
app.get("/login",(req, res)=>{
    res.sendFile(path.resolve('html/login.html'))
})

app.use((req,res)=>{
    res.status(404).sendFile(path.resolve('html/404.html'))
})

app.listen(4900)