import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar'
import Panel from './Panel'
import Playbar from './Playbar';
import axios from 'axios';

class Home1 extends Component {
  constructor(props){
      super(props);
      //this.logout=this.logout.bind(this)
      //this.handler=this.handler.bind(this)
      //this.changefocus=this.changefocus.bind(this)

      this.state = {
        src:'test-audio/Munich.mp3',
        focus: {
          songs: true,
          search: false,
          library: false,
        },
        rawData: null,
        songPlaying: null
      };
  }


  logout() {
    fire.auth().signOut();
  }

  handler = (e) =>{
    console.log(`The ${e} link was clicked.`);
    this.setState({
      src: e, 
    });
  }

  changefocus = (e) => {
    console.log(`The ${e} link was FOCUSED.`);
    const panelmapping = {
      songs: true,
      search: false,
      library: false,
  }
    
    for (var key in panelmapping){
      if (key===e){
        panelmapping[key]=true
      }
      else{
        panelmapping[key]=false
      }
    }
    this.setState({
      focus: panelmapping, 
    });
  }

  componentDidMount(){
    console.log("FUCK THIS SHIT")
    axios.get('http://localhost:3000/songs')
    .then((response) => {
      console.log(response.data)
      this.setState({
        rawData: response.data
      })
    });     
  }

  render(){

    function handler(e) {
      e.preventDefault();
      this.setState({
        src: this.state.e,
      });
    }


    var reverseLookup = (filename )=> {
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


      var finalname = filename.replace(/^.*[\\\/]/, '')
      var finalname1 = finalname.toLowerCase()
      for(var key in songs1){
        if (songs1[key]['file']===finalname1){
          var ans=[]
          ans.push(key)
          ans.push(songs1[key]['band'])
          return ans;
        }
      }
    }

    var temp1 = reverseLookup(this.state.src)
      return(
        <Router>
        <div className="wrapper">
          <Panel action={this.handler} focuspanel={this.state.focus} rawData={this.state.rawData}/>
          <Sidebar src={temp1[0]} band={temp1[1]} focus={this.changefocus}/>          
          <Playbar src={this.state.src}/>
        </div>
        </Router>
      )
  }
}

export default Home1;