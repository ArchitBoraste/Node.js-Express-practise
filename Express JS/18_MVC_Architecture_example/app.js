import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import { renderTasksPage, createNewTask} from './controller/taskController.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "view"))

app.use(express.urlencoded({extended:true}))

app.get("/", renderTasksPage)
app.post("/add-task", createNewTask)

app.listen(4900, ()=>{
    console.log("Server running on http://localhost:4900")
})