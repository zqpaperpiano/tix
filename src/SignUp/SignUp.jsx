import React from "react";
import "./SignUp.css";

export const SignUp = () => {
    return (
      <div className="sign-up">
        <div className="div">
          <div className="text-wrapper-2">Welcome! Sign Up</div>

          <div className="full-name">
            <div className="text-wrapper-3">Full Name</div>
            <div className="input-wrapper">
              <input className="name-input" placeholder="Name"/>
            </div>
          </div>

          <div className="email-address">
            <div className="text-wrapper-4">Email Address</div>
            <div className="input-wrapper">
              <input className="email-input" placeholder="Email"/>
            </div>
          </div>

          <div className="password">
            <div className="text-wrapper-4">Password</div>
            <div className="input-wrapper">
              <input className="password-input" placeholder="Password"/>
            </div>
          </div>

          <div className="confirm-password">
            <div className="text-wrapper-4">Confirm Password</div>
            <div className="input-wrapper">
              <input className="confirm-password-input" placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="contact">
            <div className="text-wrapper-4">Contact</div>
            <div className="input-wrapper">
              <input className="contact-input" placeholder="Number"/>
            </div>
          </div>
          <div className="text-wrapper-5">Already have an account?</div>
          {/* Add login and sign up button*/}
        </div>
      </div>
    );
  };

export default SignUp