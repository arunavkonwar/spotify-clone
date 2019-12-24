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
    var songs1={"Munich":"munich.mp3","Rainy Zurich":"rainyzurich.mp3","Take It Easy":"takeiteasy.mp3"}
    var elements=[]

    return(
        <div className="song-list"> 
          <h1>THIS IS THE SEARCH PANEL</h1>
        </div>
      );
  }
}


export default Searchpanel; 