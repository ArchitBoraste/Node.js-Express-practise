const express = require('express')
const app = express();


app.get('', (req, res)=>{
    res.send("<h1>Basic express js<h1>")
})
app.get('/about', (req, res)=>{
    res.send("<h1>Basic express js About Page<h1>")
})
app.get('/contact', (req, res)=>{
    res.send("<h1>Basic express js Contact Page<h1>")
})
app.listen(4900)