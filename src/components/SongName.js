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
            {this.props.src1}
        </div>
        </div>
      );
  }
}


export default SongName;