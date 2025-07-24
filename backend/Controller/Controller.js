let userData = require("../Model/UserSchema")

let PostDataApi = async (req, res) => {
    console.log(req.body);

    let { FirstName, LastName, gmail, password } = req.body
    try {

        let existingUser = await userData.findOne({ gmail: gmail })
        if (existingUser) {
            res.json({
                message: "User already Exist"
            })
        } else {
            let saveData = await userData({
                FirstName: FirstName,
                LastName: LastName,
                gmail: gmail,
                password: password

            }).save()
            res.json({
                message: "Data insert successfully"
            })
        }


    } catch (error) {
        res.json({
            message: "Something went Wrong",
        })
    }


}

let GetDataApi = async (req, res) => {


    // res.json({ name: "kaif", age: 22, add: "noida" })

    try {
        let getDAta = await userData.find({});
        res.json({
            data: getData,
        });
    } catch (error) {
        res.json({
            message: "Some thing went wrong"
        });
    }


};

let getDataByName = async (req, res) => {
    let(gmail) = req.body;
    try {
        let getData = await userData.findOne({ gmail: gmail });
        res.json({
            data: getData,
        });
    } catch (error) {
        message: "Tumse na Hoga"
    }
};

let GetDatabyId = async (req, res) => {
    let id = req.params.id
    try {
        let getData = await userData.findOne({ _id: id });
        res.json({
            data: getData,
        })
    } catch (error) {
        message: "somethng went wrong"
    }
};

let GetDataById = async (req, res) => {


    let { id } = req.params.id
    try {

        let getData = await userData.findById({id});
        if(!getData) {
            res.json({
                message:"id galat hai"
            })
        }else{
            res.json({
            data: getData,
        }) ;

        }
        
    }catch(error){
        res.json({
            message: "something went wrong"
        })
    }
}

let UpdateDataApi = async (req,res)=>{
    console.log(req.params.id)
    console.log(req.body)

    let id = req.params.id;
    let{FirstName,LastName,gmail,password} = req.body;
    try{

        let existingUser = await userData.findById(id)
        if (!existingUser){
            res.json({
                message: "User not exist"
            })
        }else{
            let updatedata = await userData.findByIdAndUpdate(id,{
                FirstName:FirstName,
                LastName:LastName,
                gmail:gmail,
                password:password
            })

            res.json({
                message:"Data update successfully"
            })
        }

    }catch(error){
        message:"Something went wrong"

    }
}

let DeleteDataApi = async(req,res)=>{

    let id = req.params.id;

    try{
        let existingUser = await userData.findById(id)

        if(!existingUser){
            res.json({
                message:"user not found",

            })
        }else{
            let deletedata = await userData.findByIdAndDelete(id);

            res.json({
                message:"data deleted successfully",
            })

        }
    }catch(error){
        res.json({
            message:"Something went wrong",
        });
    }


}

module.exports = { PostDataApi, GetDataApi, getDataByName, GetDatabyId, UpdateDataApi, DeleteDataApi};

