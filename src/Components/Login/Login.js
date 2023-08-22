import React from "react";
import { Component } from "react";
import './Login.css';

class Login extends Component{
    constructor(){
        super();
        this.state={
            loginEmail: '',
            loginPassword: '',
        }
    }

    onEmailChange=(event) => {
        this.setState({
            loginEmail: event.target.value,
        })
    }

    onPasswordChange=(event) => {  
        this.setState({
            loginPassword: event.target.value,
        })
    }

    onSubmitButton=()=> {
        this.props.onRouteChange('home');
    }

    onClickRegister = () => {
        this.props.onRouteChange('register');
    }

    render(){
        return(
            <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input 
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input 
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" />
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                <div className="lh-copy mt3">
                <p 
                onClick={this.onClickRegister}
                className="f6 link dim black db">Sign up</p>
                <p  className="f6 link dim black db">Forgot your password?</p>
                </div>
            </form>
            </main>
        );
    }
}

export default Login;