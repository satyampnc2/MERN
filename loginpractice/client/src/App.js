import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedin : '',
      name : ''
    }
    this.uponlogin = this.uponlogin.bind(this);
  }
  uponlogin(name){
    console.log('upon login called');
    console.log(name);
    this.setState({isLoggedin:'true',
      name:name});
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar isLoggedin={this.state.isLoggedin} name={this.state.name}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={()=><Login uponlogin={this.uponlogin}></Login>}></Route>
          </Switch>
        </div>
        
      </Router>
    );
  }
}

export default App;
