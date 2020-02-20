import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';
import Login from './Login'
import Home1 from './components/Home1'
import hash from "./hash";
import * as $ from "jquery";
import Player from "./components/Player";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user: null})
      }
    });
  }

  render(){
    return(
      <div className="App">
        {this.state.user ? (<Home1/>):(<Login/>)}        
      </div>
    );
  }
}

export default App;
