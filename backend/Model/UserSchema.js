let mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
     gmail:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
   
});

let userData = mongoose.model("UserData",userSchema)

module.exports = userData

