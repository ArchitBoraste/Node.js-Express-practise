import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "example_html"))

app.get("/", (req, res)=>{
    const users = ['archit', 'annu', 'appu', 'ajit']
    res.render('19home.ejs', {user: users})
})

app.get("/users/:id", (req, res)=>{
    const userID = req.params.id
    res.send(`Hello ${userID}, this is you page`)
})

app.listen(4900, ()=>{
    console.log("Server running on port http://localhost:4900")
})