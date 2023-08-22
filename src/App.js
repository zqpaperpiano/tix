import React from "react";
import { Component} from "react";
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";
import 'tachyons';


class App extends Component{
  constructor(){
    super();
    this.state={
      route: 'signin',
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route,
    })
  }

  render(){
    return(
      <div>
        {
          this.state.route === 'signin' ? 
          <Login onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}

export default App;
