import express, { urlencoded } from 'express'

const app = express()

app.use(express.urlencoded({extended:true}))

const database={
    "Shinchan":"Nohara",
    "Jinne mera dil lutteya":"OOHO"
}

app.get('/',(req, res)=>{
    res.send(`
        <h2>User Login Form</h2>
        <form action="/login" method="post">
            <input type="text" placeholder="name" name="name" required/><br>
            <input type="password" placeholder="password" name="password" required /><br>
            <button type="submit">Log In</button>
        </form>
    `)
})

app.post('/login', (req, res)=>{
    const {name, password} = req.body

    if (database[name] == password ){
        res.redirect('/success')
    }
    else{
        res.redirect("/failure")
    }
})

app.get('/success', (req, res)=>{
    res.send("Balle Balle shava shava")
})

app.get('/failure', (req, res)=>{
    res.send('Goli beta masti nai')
})

app.listen(4900,()=>{
    console.log('listning on port http://localhost:4900')
})