import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';



class Navigation extends Component {
  constructor(props){
      super(props);
      this.logout=this.logout.bind(this)
  }

  componentDidMount(){
      
  }

  logout() {
      fire.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  }
  render(){
      return(
        <div className="nav-main">
        <ul>
          <li><NavLink to="/featured">FEATURED</NavLink></li>
          <li><NavLink to="/podcasts">PODCASTS</NavLink></li>
          <li><NavLink to="/genresandmood">GENRES & MOODS</NavLink></li>
          <li><NavLink to="/newreleases">NEW RELEASES</NavLink></li>
          <li><NavLink to="/discover">DISCOVER</NavLink></li>
          <li className="logout-button"><NavLink to="/"><div onClick={this.logout}>Logout</div></NavLink></li>
          </ul>
        </div>
      );
  }
}


export default Navigation;