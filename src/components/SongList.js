import React, { Component} from 'react';
import '../App.css';
import Song from './Song';


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
      console.log('HELLO FROM THE COMPONENT DID MOUNT')
    /*
      axios.get('https://the-local-weather.firebaseio.com/0/albums/0/songs.json')
      .then((response) => {
        console.log(response.data)
        this.setState({songs:response.data})
      });
     */     
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