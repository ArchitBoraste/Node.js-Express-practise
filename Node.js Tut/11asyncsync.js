// let a=10, b =20

// setTimeout(()=> {
//     b=100
// }, 2000)

// console.log (a+b)

const fs = require('fs')

fs.readFile("text/10form_user-submission2(async).txt", "utf-8", (error, data)=>{
    if(error){
        return false
    }
    else{
        console.log(data)
    }
})

const syncData = fs.readFileSync("text/10form_user-submission.txt", "utf-8")
console.log(syncData)