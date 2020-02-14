import React, { Component} from 'react';
import '../App.css';
import Song from './Song';
import axios from 'axios';


class SongList extends Component {
  constructor(props){
    super(props);
    this.state = {
      src:'test-audio/Munich.mp3',
      focus: {
        songs: true,
        search: false,
        library: false,
      },
      rawData: null,
    };
  }

  componentDidMount(){
      console.log('HELLO FROM THE COMPONENT DID MOUNT SONG LIST')
    
      axios.get('http://localhost:3000/main')
      .then((response) => {
        console.log(response.data[0]["songs"])
        this.setState({
          rawData: response.data
        })
      });     
  }

  render(){
    var songs1 = {
      "Munich": {
        'file': "munich.mp3",
        'band': "The Fray",
      },
      "Rainy Zurich": {
        'file': "rainyzurich.mp3",
        'band': "The Fray",
      },
      "Take It Easy": {
        'file': "takeiteasy.mp3",
        'band': "The Eagles",
      }
    };
    var elements=[]
    /*

    GOOD EXAMPLE OF ITERATING THROUGH DICTIONARIES IN JAVASCRIPT
    https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript

    */

    for (var key in songs1) {
      console.log(key, songs1[key])
      elements.push(<Song songName={key} src={songs1[key]['file']} band={songs1[key]['band']} action={this.props.action}/>)
    }

    return(
        <div className="song-list"> 
          {elements}
        </div>
      );
  }
}


export default SongList; 