import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'
import Panel from './Panel'
import Playbar from './Playbar';
///test-audio/Munich.mp3

class Home1 extends Component {
  constructor(props){
      super(props);
      //this.logout=this.logout.bind(this)

      this.handler=this.handler.bind(this)
      this.changefocus=this.changefocus.bind(this)

      this.state = {
        src:'test-audio/Munich.mp3',
        focus: {
          songs: true,
          search: false,
          library: false,
        },
      };
  }


  logout() {
      fire.auth().signOut();
  }

  handler =(e) =>{
    console.log(`The ${e} link was clicked.`);
    this.setState({
      src: e, 
    });
  }

  changefocus =(e) =>{
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

  render(){

    function handler(e) {
      e.preventDefault();
      console.log('hanDLER FUCK')
      this.setState({
        src: this.state.e,
      });
    }


    var reverseLookup =(filename)=>{
      var songs1={"Munich":"munich.mp3","Rainy Zurich":"rainyzurich.mp3","Take It Easy":"takeiteasy.mp3"}
      var finalname = filename.replace(/^.*[\\\/]/, '')
      var finalname1 = finalname.toLowerCase()
      for(var key in songs1){
        if (songs1[key]===finalname1){
          return key;
        }
      }
    }

    var temp1=reverseLookup(this.state.src)
      return(
        <Router>
        <div className="wrapper">
          <Panel action={this.handler} focuspanel={this.state.focus}/>

          <Sidebar src={temp1} focus={this.changefocus}/>
          
          <Playbar src={this.state.src}/>
        </div>
        </Router>
      )
  }
}

export default Home1;