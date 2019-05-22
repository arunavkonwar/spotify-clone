import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import ReactAudioPlayer from 'react-audio-player';

class Audioplayer extends Component {

  render(){
      return(
        <div className="playbar">
            <button class="btn warning">Warning</button>
            <ReactAudioPlayer
            src="munich.ogg"
            autoPlay
            controls
            />
        </div>
      );
  }
}


export default Audioplayer;