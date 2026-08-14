import express from 'express'
const app = express()

// function errorHandling(err, req, res, next){
//     res.status(500).send("Some error occuring, try after some time")
// }
// app.use(errorHandling)
//I need to put the error handling middleware at the bottom

app.get("/", (req, res)=>{
    res.send1("Home Page")
})

function errorHandling(err, req, res, next){
    res.status(500).send("Some error occuring, try after some time")
}
app.use(errorHandling)

app.listen(4900)