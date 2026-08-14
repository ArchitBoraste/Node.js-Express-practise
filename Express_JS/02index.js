const express = require('express')
const app = express();

app.get("", (req, res)=>{
    res.send('Home Page 1')
})
app.get("", (res, req)=>{
    res.esnd('Home page 2')
})


app.listen(4900)