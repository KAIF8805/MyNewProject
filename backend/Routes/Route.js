let express = require("express")
let { PostDataApi, GetDataApi, getDataByName, GetDatabyId, UpdateDataApi, DeleteDataApi } = require("../Controller/Controller");
// const { SignUpApi, LoginApi } = require("../Controller/User_auth_controller");
let {SignUpApi, LoginApi} = require("../Controller/User_auth_controller")

let router = express.Router()

router.post("/api/postdata", PostDataApi);

router.get("/api/getdata", GetDataApi);

router.get("/api/getdatabyname", getDataByName);

router.get("/api/getdatabyid/:id", GetDatabyId);

router.put("/api/updatedata/:id", UpdateDataApi);

router.delete("/api/deletedata/:id", DeleteDataApi)





// Authentication_Api

router.post("/api/auth/signup", SignUpApi )

router.post("/api/auth/login", LoginApi)


module.exports = router