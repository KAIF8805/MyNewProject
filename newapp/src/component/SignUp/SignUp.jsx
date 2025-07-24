import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css"


function SignupPage() {
  let [signupData, setSignupData] = useState({})
  

let handleChange =(e)=>{

  let {name,value } = e.target;
  setSignupData({...signupData,[name]:value})
  
}

let handleClick = ()=>{
  axios.post("http://localhost:5000/api/auth/signup", signupData).then((res)=>{
    console.log(res)
    alert(res)
    console.log(signupData);
  })
    
  
}


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col">
          <div className="card">
            <div className="card-header-style card-header">Signup</div>
            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  name="FirstName"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  name="LastName"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="gmail"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  name="ConfirmPassword"
                  onChange={handleChange}
                />
              </div>

              <Link to="/login">Already have an account?</Link>

              <div className="btn-style mt-3">
                <button className="btn btn-primary" onClick={handleClick}>
                  Signup
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default SignupPage;
