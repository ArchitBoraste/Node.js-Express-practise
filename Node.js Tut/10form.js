const http  = require('http')
const fs = require('fs')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
    fs.readFile('html/10form.html','utf-8',(err, data)=>{
        if(err){
            res.writeHead(500,{"Content-type":"text/plain"})
            res.end("Internal server error")
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        if(req.url == "/"){
            res.write(data)
            
            res.end()
        }
        else if(req.url=="/submit"){
            let body = ''

            req.on('data', (chunk)=>{
                console.log(chunk)
                body = body+chunk.toString()
            })
            req.on('end',(chunk)=>{
                console.log("Final body => ",body )
                let readableData = queryString.parse(body)
                console.log("Readable data =",readableData)

                let dataString = "My name is "+readableData.name+" and my email address is"+readableData.email

                // try{
                //     fs.writeFileSync("text/10form_user-submission.txt", dataString, "utf-8")
                //     console.log("Saved submission info to text document")
                // }
                // catch (fileError){
                //     console.log("failed to save the file: "+fileError.message)
                // }

                fs.writeFile("text/10form_user-submission2(async).txt", dataString, "utf-8", (error)=>{
                    if(error){
                        res.end("Internal server error: ", error.message)
                    }
                    res.end(" Saved file in the drive")
                })
                
                res.write(`form submitted by ${readableData.name}, with email address ${readableData.email} `)
                res.end()
            })

           
            // res.write(`form submitted by ${readableData.name}, with email address ${readableData.email} `)
            // we cant write this here as the output we shall get is => form submitted by undefined, with email address undefined
            // This is because asynchronous programming in Node.js, res.write() line is executing before the data has actually finished arriving from the browser.

        }
    })
})
server.listen(4900)




// const server = http.createServer((req, res) => {

//     res.statusCode = 200
//     res.setHeader("Content-type", "text/html")
//     //we could have also ==> res.writeHead(200, { "Content-Type": "text/html" });
    
//     if(req.url == "/"){
//         res.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name="name">
//         <input type="text" placeholder="enter email" name="email">
//         <button>submit</submit>
//         </form>`)
//         res.end()
//     }
//     else if(req.url=="/submit"){
//         res.write("form submitted")
//     }
// })

// server.listen(4900)