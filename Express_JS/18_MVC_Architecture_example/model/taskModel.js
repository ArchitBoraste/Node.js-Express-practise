//model only cares about
//here we have data and functions to manipulate(get the data and add the data) the data

const tasks=[
    { id: 1, title: 'Setup MVC Folders', completed: true },
    { id: 2, title: 'Learn Controller Logic', completed: false }
]

export const getTasks = () => {
    return tasks
}

export const addTask = (taskName)=>{
    const newTask={
        id: tasks.length+1,
        title: taskName,
        completed: false
    }
    tasks.push(newTask)
    return newTask
}
