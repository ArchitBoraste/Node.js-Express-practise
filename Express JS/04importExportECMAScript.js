import express from 'express'
import home from './pages/homeECMAScript.js'

const app = express()

app.get("", (req, res)=>{
    res.send(home())
})
app.listen(4900)