let mongoose = require ("mongoose")

let user_auth_schema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true
    },
    password:{
         type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
});
let user_auth = mongoose.model("user_auth", user_auth_schema)
module.exports =user_auth;