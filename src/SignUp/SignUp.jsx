import React from "react";
import { Component } from "react";
import "./SignUp.css";
import PasswordStrengthBar from "react-password-strength-bar";

class SignUp extends Component{
  constructor(){
    super();
    this.state = ({
      registerEmail: '',
      registerPassword: '',
      samePassword: false,
      name: '',
      contact: '',
    })
  }

  onPasswordChange = (event) => {
    this.setState({
      registerPassword: event.target.value
    })
  }

  onEmailChange = (event) => {
    this.setState({
      registerEmail: event.target.value
    })
  }

  onConfirmPasswordChange = (event) => {
   let confirm = event.target.value;
    if(this.state.samePassword === false && this.state.registerPassword === confirm){
      this.setState({samePassword: true})
      console.log('same!');
    }else if(this.state.samePassword === true && this.state.registeredPassword != confirm){
      this.setState({samePassword: false})
      console.log('not same :(');
    }
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onContactChange = (event) => {
    this.setState({
      contact: event.target.value
    })
  }

  onClickLogin(){
    this.props.onRouteChange('Login');
  }

  onClickSubmit(){
    if(this.state.samePassword === true && this.state.registerPassword.length > 8){
      this.props.loadUser(this.state.registerEmail);
      this.props.onRouteChange('AllEvents');
    }
  }


  render(){
    return (
      <div className="sign-up">
        <div className="welcome-sign-up">
          <p className="text-wrapper-2"> Welcome! Sign Up Here!</p>
        </div>

        <div className="format">

            <div className="left-sign-ups">

              <div className="full-name">
                <div className="text-wrapper-3">Full Name</div>
              <div className="input-wrapper">
                <input 
                onChange={this.onNameChange}
                className="data-input" placeholder="Name"/>
              </div>
            </div>

            <div className="email-address">
              <div className="text-wrapper-3">Email Address</div>
              <div className="input-wrapper">
                <input 
                onChange={this.onEmailChange}
                type="email" className="data-input" placeholder="Email"/>
              </div>
            </div>

            <div className="password">
              <div className="text-wrapper-3">Password</div>
              <div className="input-wrapper">
                <input 
                onChange={this.onPasswordChange}
                type="password" className="data-input" placeholder="Password"/>
                <PasswordStrengthBar 
                minLength={8}
                password={this.state.registerPassword} />
              </div>
            </div>

            <div className="submit-button">
            <input
          type="submit"
          onClick={() => {this.onClickSubmit()}}
          className="sign-up-btm" value="Sign Up"/>
          </div>

            </div>

         <div className="right-sign-ups">

         <div className="confirm-password">
            <div className="text-wrapper-3">Confirm Password</div>
            <div className="input-wrapper">
              <input 
              onChange={this.onConfirmPasswordChange}
              type="password" className="data-input" placeholder="Confirm Password"/>
            </div>
          </div>

          <div className="contact">
            <div className="text-wrapper-3">Contact</div>
            <div className="input-wrapper">
              <input 
              onChange={this.onPasswordChange}
              className="data-input" placeholder="Number"/>
            </div>
          </div>

         </div>

          </div>

        <div className="login-here">
            <div className="text-wrapper-5">Already have an account?</div>
            <p 
            onClick={() => {this.onClickLogin()}}
            className="text-wrapper-5 login-btm">Login Here</p>
          </div>

      </div>
    );
  }
}

export default SignUp