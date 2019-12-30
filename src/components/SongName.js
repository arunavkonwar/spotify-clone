import React, { Component} from 'react';
import '../App.css';



class SongName extends Component {
  render(){
    //test-audio/RainyZurich.mp3
      return(
        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <br></br>
        <div className="songNameHeading">Now Playing
        </div>
        <div className="songNameTitle">
            {this.props.src} <br></br>
            <h6>{this.props.band}</h6>
        </div>
        </div>
      );
  }
}


export default SongName;