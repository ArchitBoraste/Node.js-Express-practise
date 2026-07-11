//controller handles the incoming network requests. It imports the functions from the Model to grab or change data, and then passes 
//that data to the View.

import { getTasks, addTask } from "../model/taskModel.js"

//handling the get request for the home page
export const renderTasksPage = (req,res)=>{
    const allTasks = getTasks()
    res.render("index", {tasks: allTasks, error: null})
}

export const createNewTask = (req, res)=>{
    const taskTitle = req.body.taskTitle

    if(!taskTitle || taskTitle.trim() === ""){
    //.triom() removes the blank spaces. So if the user just entered "  " in the task title we shall not accept it 
        const allTasks = getTasks()
        res.render('index', {tasks: allTasks, error:"Task title cannot be empty"})
    }
    addTask(taskTitle)
    res.redirect("/")//redirects to home page after adding task but we are already in the home page...So it basically refreshes the 
                     //page and we can see the newly added task in the list
}

