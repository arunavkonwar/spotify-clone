import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import Navigation from './Navigation';
import axios from 'axios';
import Song from './Song';


class Searchpanel extends Component {
  constructor(props){
    super(props);

    //this.handler = this.handler.bind(this);

    function handler(num){
      this.setState({
        src: this.state.num,
      });
    }
  }

  componentDidMount(){
      console.log('HELLO FROM SEARCH PANEL')
      const timeStamp=Date();
    
  }

  render(){
    return(
        <div className="song-list"> 
          <h1>THIS IS THE SEARCH PANEL</h1>
        </div>
      );
  }
}


export default Searchpanel; 