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
import TaylorSwiftInfo from './TaylorSwiftInfo/TaylorSwiftInfo';
import Details from './BuyingPage/Details';
import Seating from './BuyingPage/Seating';
import Payment from './BuyingPage/Payment';

class App extends Component{
  constructor(){
    super();
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

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComp/>
      </header>
      
      <main>
        <Payment/>
      </main>

  onRouteChange = (route) => {
    this.setState({
      route: route,
    })
  }

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
        <header>
          {this.onUserLogin()}
        </header>
        
        <main>
          {this.pageNavigation()}
        </main>
      </div>
    );
  }
}

export default App;
