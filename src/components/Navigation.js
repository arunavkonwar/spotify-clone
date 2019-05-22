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
      fire.auth().signOut();
  }
  render(){
      return(
        <div className="nav-main">
        <ul>
          <li><NavLink to="/featured">Featured</NavLink></li>
          <li><NavLink to="/podcasts">Podcasts</NavLink></li>
          <li><NavLink to="/genresandmood">Genres & Moods</NavLink></li>
          <li><NavLink to="/newreleases">New Releases</NavLink></li>
          <li><NavLink to="/discover">Discover</NavLink></li>
          <li className="logout-button"><NavLink to="/"><div onClick={this.logout}>Logout</div></NavLink></li>
          </ul>
        </div>
      );
  }
}


export default Navigation;