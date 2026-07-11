const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{

    let headerData
    // setTimeout(()=>{
    //     fs.readFile("html/14header.html", "utf-8", (error, headerContent)=>{
    //     if(error){
    //         res.writeHead(404,{"content-type":"text/plain"})
    //         res.end("Header not found")
    //         return
    //     }
    //     headerData = headerContent
    // })
    // }, 100)
    // now it will take 100 ms to generate the header data, so it wont pass down in time and hence the 
    // header portion wouldnt have been visible...as well as the css because we have linked css in 14header.html

    headerData=fs.readFileSync("html/14header.html", "utf-8")

    let file = "/14home"
    if(req!='/14home'){
        file=req.url
    }

    console.log(file)
    if(req.url!="/14style.css"){
        fs.readFile("html"+file+".html", "utf-8", (error, content)=>{
            if(error){
                res.writeHead(404, {"content-type":"text/plain"})
                res.end("Home page not found")
                return
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.write(headerData+content)
            res.end()
        })
    }
    else if(req.url=='/14style.css'){
        fs.readFile("html/14style.css", "utf-8", (error, cssContent)=>{
            if(error){
                res.writeHead(404, {"content-type":"text/plain"})
                res.end("CSS not found Error")
                return
            }
            res.writeHead(200,{"content-type":"text/css"})
            res.write(cssContent)
            res.end()
        })
    }
})

server.listen(4900)