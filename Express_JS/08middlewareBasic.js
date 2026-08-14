import express from 'express'
import path from 'path'

const app = express();

function checkRoute (req, res, next){
    console.log(req.url)
    next()
}

app.use(checkRoute)

app.get("/",(req, res)=>{
    res.send("Home page")
})

app.get("/about",(req, res)=>{
    res.send("About page")
})

app.get("/contact",(req, res)=>{
    res.send("Contact page")
})

app.listen(4900)

