const fs = require('fs')

const initialUserData = {
    name: "Archit Boraste",
    email: "architboraste2006@gmail.com",
    role: "Developer"
};

const dataString = JSON.stringify(initialUserData, null, 2)

//Sync write
try{
    fs.writeFileSync('fsCRUD/file1.txt', dataString, "utf-8")
    console.log("Written to file 1 successfully")
}
catch(error){
    console.log("Internal server error: "+error.message)
}

//Async Write
fs.writeFile('fsCRUD/file2.txt', dataString, "utf-8", (error)=>{
    if(error){
        console.log("Internal server error"+error.message)
    }
    else{
        console.log("Written to file 2 successfully")
    }
})

//Sync read
try{
    const syncRawData = fs.readFileSync("fsCRUD/file1.txt", "utf-8")
    const syncUserObj = JSON.parse(syncRawData)
    console.log("Read file 1 synchronously: "+syncUserObj)
}
catch(error){
    console.log("Internal server error while reading the file synchronously: "+error.message)
}

//Async Read
fs.readFile("fsCRUD/file2.txt", "utf-8", (error, asyncRawData)=>{
    //we dont need to initialise asyncRawData with any value, node.js will do that for us
    if(error){
        console.log("Internal Server error while async read of file2.txt: "+error.message)
        return;
    }
    const asynUserObj = JSON.parse(asyncRawData)
    console.log("Async read of file2.txt complete: "+asynUserObj)
})


//Sync update 
try{
    const syncRawData = fs.readFileSync("fsCRUD/file1.txt", "utf-8")
    const syncUserObj = JSON.parse(syncRawData)

    syncUserObj.role="Junior Dev"
    syncUserObj.skills=["Node.js, React JS, JS"]
    
    const newSyncRawData = JSON.stringify(syncUserObj, null, 2)
    fs.writeFileSync("fsCRUD/file1.txt", newSyncRawData, "utf-8")
    console.log("Sync update of file 1 complete")
}
catch(error){
    console.log("Internal server error while sync read of file1: "+error.message)
}


//Async update
fs.readFile("fsCRUD/file2.txt", "utf-8", (error, rawData) => {
    if(error){
        console.log("Error while reading during asynch update : "+error.message)
        return;
    }
    const asyncUserObj = JSON.parse(rawData)
    asyncUserObj.role = "Junior dev"
    asyncUserObj.location = "Pune"

    const newRawData = JSON.stringify(asyncUserObj, null, 2)

    fs.writeFile("fsCRUD/file2.txt", newRawData, "utf-8", (error)=>{
        if(error){
            console.log("Internal server error while writing during async file update: "+error.message)
            return;
        }
        console.log("Async updation of file2 complete")
    })
})


//Sync delete
try{
    fs.unlinkSync("fsCRUD/file1.txt")
    console.log("Sync delete of file 1 complete")
}
catch(error){
    console.log("Internal server error during file1 sync delete: "+error.message)
}

//Async delete
fs.unlink("fsCRUD/file2.txt", (error)=>{
    if(error){
        console.log("Internal server error during async delete of file2: "+error.message)
        return;
    }
    console.log("Async delete of file 2 complete")
})