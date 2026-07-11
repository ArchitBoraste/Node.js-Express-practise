import express from 'express'
import morgan from 'morgan'
const app = express()

app.use(morgan('dev'))

app.get("/", (req, res)=>{
    res.send("Home Page")
})
app.get("/about", (req, res)=>{
    res.send("About Page")
})
app.get("/contact", (req, res)=>{
    res.send("Home Page")
})

app.get("/wait", (req, res)=>{
    setTimeout(()=>{
        res.send("Waited for 2 seconds before sending response")
    },2000)
})
app.listen(4900)