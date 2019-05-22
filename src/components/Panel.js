import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';
import Navigation from './Navigation';


class Panel extends Component {
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
        <div className="main-panel">
        PANEL BITCH
        <Navigation/>
        </div>
      );
  }
}


export default Panel;