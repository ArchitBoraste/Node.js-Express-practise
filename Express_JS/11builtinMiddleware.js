import express from 'express'
import path from 'path'

const app = express()

app.use(express.urlencoded({extended:false}))
//extended:false-> will map only simple key value pairs, used for this example
//extended:true -> maps all key value pairs

app.get("/", (req, res)=>{
    res.send(`
        <button><a href="/login">Login</a></button>`)
})

app.get("/login", (req, res)=>{
    res.send(`
        <form action="/submit" method="post">
            <input type="text" name="email" placeholder="Enter your email" />
            <input type="password" name="Password" placeholder="Enter your password" />
            <button type="submit">Submit</button>
        </form>`)
})

app.post("/submit", (req,res)=>{
    const email = req.body.email
    const password = req.body.Password
    res.send(`Email: ${email} and Password: ${password} submitted`)
    console.log(req.body)
})

app.listen(4900)