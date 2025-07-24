let mongoose = require("mongoose")

let db = mongoose.connect("mongodb://127.0.0.1/mynewproject").then(()=>{
    console.log("DataBase Connected")
})
.catch(()=>{
    console.log("DataBase is not connected")
})


module.exports = db;