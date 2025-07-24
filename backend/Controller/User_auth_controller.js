let user_auth = require("../Model/user_auth_schema");
let jwt = require("jsonwebtoken");
let bcrypt = require('bcryptjs');
const { json } = require("express");


let SECRET_KEY = "MyNewProject"
let SignUpApi = async (req, res) => {
    console.log(req.body);

    let { FirstName, LastName, gmail, password, ConfirmPassword } = req.body;

    try {

        if (password !== ConfirmPassword) {
            res.json({
                Message: "Password Not Matching"
            });
        } else {
            let existingUser = await user_auth.findOne({ gmail: gmail });
            if (existingUser) {
                res.json({
                    Message: "User Already exist"
                });
            } else {

                let hashPassword = await bcrypt.hash(password, 10);
                let hashConfirmPassword = await bcrypt.hash(ConfirmPassword, 10);


                let signUpUser = await user_auth({
                    FirstName: FirstName,
                    LastName: LastName,
                    gmail: gmail,
                    password: hashPassword,
                    ConfirmPassword: hashConfirmPassword
                }).save()

                let token = jwt.sign({ gmail: signUpUser.gmail }, SECRET_KEY)

                res.json({
                    message: "Registration Successfully",
                    token: token,
                });
            }
        }
    } catch (error) {
        res.json({
            message: "something went wrong"
        })
    }

}




let LoginApi = async (req, res) => {
    console.log(req.body)

    let { gmail, password, ConfirmPassword } = req.body;


    try {
        if (password !== ConfirmPassword) {
            res.json({
                message: "Password and confirmPassword matching"
            })
        } else {
            let existingUser = await user_auth.findOne({ gmail, gmail })
            if (!existingUser) {
                res.json({
                    message: "User not found"
                })
            } else {
                let matchedPassword = await bcrypt.compare(password, existingUser.password)
                if (!matchedPassword) {
                    res.json({
                        message: "Invalid Password"
                    })
                } else {
                    let token = jwt.sign({ gmail: existingUser.gmail }, SECRET_KEY)
                    res.json({
                        message: "Login Successfully",
                        token: token,
                    })
                }

            }
        }

    } catch (error) {
        res, json({
            message: "something went wrong"
        })
    }
};

module.exports = { SignUpApi, LoginApi }
