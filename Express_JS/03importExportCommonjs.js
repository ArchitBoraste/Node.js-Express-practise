const express = require('express') 
const app = express()
const home = require('./pages/homeCommonjs')

app.get("",(req, res)=>{
    home(req, res)
})
app.listen(4900)