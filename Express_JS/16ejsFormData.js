import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//when we had type:commonjs in package .json we got __dirname(absolute path to the folder containing the current file) and 
//__filename(absolute path to the current file) automatically

//but now in type:module we get them using the above 2 lines
//import.meta.url returns the path in url format like file:///C:/Users/Archit/Desktop/NodeJS/08middlewareBasic.js but we need it in
//normal format like C:\Users\Archit\Desktop\NodeJS\08middlewareBasic.js so we use fileURLToPath to convert it to normal format

//path.dirname() returns the path of the folder containing the file passed to it, it simply cuts off file name at the end 
//example: path.dirname('C:\Users\Archit\Desktop\NodeJS\08middlewareBasic.js') returns C:\Users\Archit\Desktop\NodeJS

app.set("view engine", "ejs")
//say the ejs file -> file.ejs...without this line: res.render('file.ejs'), with this line: res.render('file')

//--app.set("views", path.resolve(__dirname, "views"))--
//this will look for the ejs file inside views folder

app.set("views", path.resolve(__dirname, "example_html"))
//now will look for the ejs file inside example_html folder


app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.render("16form", {user:null, error:null})
})

app.post("/submit", (req, res)=>{
//in "/" url we render 16form.ejs there we have an action="/submit and method="/post" 
//so when we click the submit button, the data gets sent to /submit url 
//there we get can read data via req.body.(name of input field)
//remember express.urlencoded middleware is the one responsible to parse data we got from submitting the form and put it in req.body

    const username = req.body.username
    const email = req.body.email

    if(!username || !email){
        return res.render("16form", {user:null, error:"Please enter both username and email"})   
    }
    res.render("16form", {user:{username, email}, error:null})
})

app.listen(4900, ()=>{
    console.log("Server is running on http://localhost:4900")
})