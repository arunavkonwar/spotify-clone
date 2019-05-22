import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';
import Home from './Home'
import Login from './Login'
import About from './About'
import Sidebar from './components/Sidebar'
import Home1 from './components/Home1'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{},
    }
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
