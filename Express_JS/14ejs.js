import express from 'express'
import path from 'path'
const app = express()

//ejs engine looks into a 'views' folder for the ejs files by default

//in app.render() we dont need to give the absolute path like we did in .sendFile using path.resolve

//but now we have our ejs file inside a folder called example_html,
//so we can just enter the relative path ex--> app.render('html/home')
//here we also didnt need to give .ejs as it will know that it has to .ejs files

//or can also just tell express to looks for our ejs files in example_html by using the following line
app.set('views', path.resolve('example_html'))

//tell express to use ejs engine
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    const userData ={
        name : "Archit Boraste",
        cgpa : "9.0"
    }

    //compiles example_html/14home.html by injecting userData object fields inside it
    res.render('14home', userData)
})

app.listen(4900)