import express from 'express'
const app = express()

app.use(express.json())

let tasks = [
    {id: 1, title: "Task 1", completed: false},
    {id: 2, title: "Task 2", completed: true},
    {id: 3, title: "Task 3", completed: false}
]

app.get("/tasks", (req, res)=>{
    res.status(200).json(tasks) 
    //.json(tasks) formats task into a json string and                          
    //sends it to the user
})

app.get('/tasks/:id', (req, res)=>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t=> t.id === taskId)
})
