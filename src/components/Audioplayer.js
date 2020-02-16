import React, { Component} from 'react';
import '../App.css';
import ReactAudioPlayer from 'react-audio-player';

class Audioplayer extends Component {
  render(){
    //test-audio/RainyZurich.mp3
    // `/test-audio/${this.props.id}`
      return(
        <div className="audioPlayer">
            <ReactAudioPlayer
            src = {`${this.props.storage}/${this.props.src}.mp3`}      
            controls
            autoPlay
            />
        </div>
      );
  }
}


export default Audioplayer;