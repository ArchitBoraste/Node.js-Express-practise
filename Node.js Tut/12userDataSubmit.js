const queryString = require('querystring')

function userDataSubmit(req, res){
    
    let str = ''

    req.on('data', (chunk)=>{
        str=str+chunk.toString() 
    })
    req.on('end', (chunk)=>{
        let data = queryString.parse(str)
        let submitStatement = `by ${data.name}, email: ${data.email}`
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Form Submitted<h2>`)
        res.write(`${submitStatement}`)

        res.end()
    })
}

module.exports = userDataSubmit