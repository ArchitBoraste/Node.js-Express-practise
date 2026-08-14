import express from 'express'
import path from 'path'

const app = express()

//this opens up the html folder and maked=s the files inside it accessible
//so when html page will request for a file like ./CSS/home.css, express will look inside the html/ 
//folder and all its subfolders
app.use(express.static(path.resolve('html')))


//say we wanted to store the css file inside another folder other than html
//we can simply swap out 'html' with 'cssFolderName'
//not necessary css be in filewhere html is there 

app.get("/", (req, res)=>{
    res.sendFile(path.resolve('html/home.html'))
})
app.get("/about", (req, res)=>{
    res.sendFile(path.resolve('html/about.html'))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.resolve('html/login.html'))
})

app.use((req, res)=>{
    res.status(404).sendFile(path.resolve('html/404.html'))
})

app.listen(4900, ()=>{
    console.log("The server is running on http://localhost:4900")
})