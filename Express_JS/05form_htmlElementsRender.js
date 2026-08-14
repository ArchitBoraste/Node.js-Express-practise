import express from 'express'
const app = express()

app.get("", (req, res)=> {
    res.send(`<h1>Home Page</h1>
        <a href="/login"><button>Login</button></a>`)
})


app.get("/login", (req, res)=>{
    res.send(`
        <form action="/submit" method="post">
            <input type="text" placeholder="Enter your name" />
            <input type="password" placeholder="Enter your password" />
            <button>login</button>
        </form>    
    `)
})
//form will be submitted to /submit

//method post means you are telling the browser:
//"Take this data and securely send it to the server to create or update something."
//unlike in the get request, the url stays clean. Post method is good for sensitive data as it 
//isnt saved in browser history or server url logs

// /submit will be accepting post req hence for it we'll use  app.post

app.post("/submit", (req, res)=>{
    res.send("<h1>Data Submitted</h1>")
})

app.listen(4900)