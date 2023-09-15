import React from "react";
import { Component } from "react";

class Register extends Component{
    constructor(){
        super();
        this.state={
            fName: '',
            lName: '',
            email: '',
            password: '',
        }
    }

    onFNameChange = (event) => {
        this.state({
            fName: event.target.value
        })
    }

    onLNameChange = (event) => {
        this.state({
            lName: event.target.value
        })
    }
    
    onEmailChange = (event) => {
        this.state({
            email: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.state({
            password: event.target.value
        })
    }

    onClickSignin = () => {
        this.props.onRouteChange('signin');
    }

    render(){
        return(
            <main class="pa4 black-80">
            <form class="measure center">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Register</legend>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">First Name</label>
                    <input 
                    onChange={this.onFNameChange}
                    class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" />
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Last Name</label>
                    <input 
                    onChange={this.onLNameChange}
                    class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  />
                </div>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input 
                    onChange={this.onEmailChange}
                    class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" />
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Password</label>
                    <input 
                    onChange={this.onPasswordChange}
                    class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"/>
                </div>
                </fieldset>
                <div class="">
                <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" />
                </div>
                <div class="lh-copy mt3">
                <p 
                onClick={this.onClickSignin}
                class="f6 link dim black db">Have an account? Log in Here</p>
                </div>
            </form>
            </main>
        );
    }
}

export default Register;