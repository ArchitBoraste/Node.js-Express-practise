import express from 'express'
import userData from './users.json' with {type:'json'}
const app = express()

app.get("/", (req, res)=>{
    res.send(userData)
})

app.get("/user/:id", (res, req)=>{
    const id = req.params.id
    const filteredData = userData.filter((user)=>user.id===id)
    res.send(filteredData)
})

app.listen(4900,()=>{
    console.log("Listening on http://localhost:4900")
})