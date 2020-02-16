import React, { Component} from 'react';
import '../App.css';



class SongName extends Component {
  constructor(props){
    super(props);
    this.state = {
      songName: null
    };
  }

  reverseTitleLookup = (e) => {
    for (var key in this.props.rawData) {
      if (this.props.rawData[key]['id'] === e){
          return(this.props.rawData[key]['title']) 
      }
    }
  }

  reverseArtistLookup = (e) => {
    for (var key in this.props.rawData) {
      if (this.props.rawData[key]['id'] === e){
          return(this.props.rawData[key]['artist']) 
      }
    }
  }

  render(){
    //test-audio/RainyZurich.mp3
      return(
        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <br></br>
        <div className="songNameHeading">Now Playing
        </div>
        <div className="songNameTitle">
            {this.reverseTitleLookup(this.props.songPlaying)} <br></br>
            <h6>{this.reverseArtistLookup(this.props.songPlaying)}</h6>
        </div>
        </div>
      );
  }
}


export default SongName;