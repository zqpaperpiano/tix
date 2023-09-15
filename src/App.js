<<<<<<< HEAD
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompProfile from './Components/Navbar/NavbarCompProfile';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import EventsAll from './Events/EventsAll';
import NavbarComp from './Components/Navbar/NavbarComp';
import EventsMusic from './Events/EventsMusic';
import EventsSports from './Events/EventsSports';
=======
import React from "react";
import { Component} from "react";
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";
import 'tachyons';

>>>>>>> 948866ed17f750b5a013cb15929efe844a961da0

class App extends Component{
  constructor(){
    super();
<<<<<<< HEAD
    this.state=({
      route: 'AllEvents',
      user: {
        email: '',
      }
    })
  }

  loadUser = (email) => {
    this.setState({
      user: {
        email: email,
      }
    })
  }

  onUserLogin(){
    if(this.state.user.email != ''){
      return <NavbarCompProfile onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
    }else{
      return <NavbarComp onRouteChange={this.onRouteChange} />
=======
    this.state={
      route: 'signin',
>>>>>>> 948866ed17f750b5a013cb15929efe844a961da0
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route,
    })
  }

<<<<<<< HEAD
  pageNavigation(){
    switch(this.state.route){
          case 'Login':
            return <Login onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          case 'SignUp':
            return <SignUp onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          case 'AllEvents':
            return <EventsAll onRouteChange={this.onRouteChange} />
          case 'Music':
            return <EventsMusic onRouteChange={this.onRouteChange} />  
          case 'Sports':
            return <EventsSports onRouteChange={this.onRouteChange} />
        }
  }

  render(){
    return (
      <div className="App">
        <NavbarComp onRouteChange={this.onRouteChange} />
        <SignUp onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        {/* <header>
          {this.onUserLogin()}
        </header>
        
        <main>
          {this.pageNavigation()}
        </main> */}
=======
  render(){
    return(
      <div>
        {
          this.state.route === 'signin' ? 
          <Login onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
        }
>>>>>>> 948866ed17f750b5a013cb15929efe844a961da0
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 948866ed17f750b5a013cb15929efe844a961da0
