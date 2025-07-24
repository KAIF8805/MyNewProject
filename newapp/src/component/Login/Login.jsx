import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginPage() {

    let[loginData,setLoginData] = useState("");

    let handleChange = (e) => {

        let {name,value} = e.target;
        setLoginData({...loginData,[name]:value});

    };

    let handleLogin = () => {
        console.log(loginData);
    }

   

    return (

        <>

            <div class="container">
                <div class="row">
                    <div class="col-md-3">

                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header-style card-header">
                                Login
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="combination of (1-10, a-z, !@#%^&*)" name="password" onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="confirm password" name="confirmPassword" onChange={handleChange}/>
                                </div>
                                <Link to="/signup">Don't have an account? Create account.</Link>
                                <div className="btn-style">
                                   <button class="btn btn-primary" onClick={handleLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">

                    </div>

                </div>
            </div>
        </>
    )

}

export default LoginPage;