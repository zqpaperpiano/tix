import React from "react";
import "./Login.css";

export const Login = () => {
    return (
      <div className="login">
        <div className="div">
          <div className="text-wrapper-2">Welcome Back! Login</div>
  
          <div className="email-address">
            <div className="text-wrapper-3">Email Address</div>
            <div className="input-wrapper">
              <input className="email-input" placeholder="Email"/>
            </div>
          </div>
  
          <div className="password">
            <div className="text-wrapper-3">Password</div>
            <div className="input-wrapper">
              <input className="password-input" placeholder="Password"/>
            </div>
          </div>
  
          <div className="text-wrapper-4">Don’t have an account?</div>
          {/*Add login and sign up button */}
        </div>
      </div>
    );
  };
  
  export default Login