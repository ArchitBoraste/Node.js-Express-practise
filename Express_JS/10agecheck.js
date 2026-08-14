import express from 'express'
import path from 'path'

const app = express()

function ageCheck(req, res, next){
    const age = parseInt(req.query.age)
    if(!age){
        return res.redirect('/')
    } //if age not given un url query, redirects to "/" to get age
    else if(age<=18){
        res.status(403).send('<h1>Access Denied, age too less</h1>')
    }
    else{
        next()
    }
}

app.get("/", (req, res)=>{
    res.sendFile(path.resolve('example_html/10root.html'))
})

app.get("/home", ageCheck,(req , res)=>{
    const name = req.query.name
    res.send(`Hello ${name}, you are older than 18`)
})

//applied ageCheck only on home as we want the "/" to be accessed by everyone

app.listen(4900)