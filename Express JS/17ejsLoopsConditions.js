import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = (path.dirname(__filename))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "example_html"))

app.get("/", (req,res)=>{
    const usersList = [
        { name: 'Alice', role: 'Admin', isOnline: true },
        { name: 'Bob', role: 'User', isOnline: false },
        { name: 'Charlie', role: 'Moderator', isOnline: true },
        { name: 'Diana', role: 'User', isOnline: false }
    ];

    res.render("17home", {users : usersList})
})

app.listen(4900, ()=>{
    console.log("Server is running on http://localhost:4900")
})