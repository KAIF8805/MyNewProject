
let express = require("express");
let router = require("./Routes/Route");
let db = require("./DataBase/db")
let app = express();
let cors = require("cors");


app.use(cors());


app.use(express.json());

app.use("/",router);

app.listen(5000,()=>{
    console.log("port 5000 is active")
});