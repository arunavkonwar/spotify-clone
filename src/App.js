import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';
import Login from './Login'
import Home1 from './components/Home1'
import passport from 'passport'
import SpotifyStrategy from 'passport-spotify'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{},
    }
  }

  componentDidMount(){
    //this.authListener();
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
