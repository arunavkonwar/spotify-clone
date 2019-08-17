import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';



class Sidebar extends Component {
  constructor(props){
      super(props);
      this.logout=this.logout.bind(this)
  }

  componentDidMount(){
      
  }

  logout() {
      fire.auth().signOut();
  }
  render(){
      return(
        <div className="sidenav">
          <img src="images/spotify-logo.png" width="60%" align="left"></img>
          <br></br><br></br>
          <a href="#home">Home</a>
          <a href="#search">Search</a>
          <a href="#library">Your Library</a>
        </div>
      );
  }
}


export default Sidebar;