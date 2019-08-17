import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './Weather'
import Contact from './Contact'
import Sidebar from './Sidebar'
import Panel from './Panel'
import Playbar from './Playbar';
import SongList from './SongList'
///test-audio/Munich.mp3

class Home1 extends Component {
  constructor(props){
      super(props);
      //this.logout=this.logout.bind(this)

      this.handler=this.handler.bind(this)

      this.state = {
        src:'test-audio/Munich.mp3',
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

  render(){

    function handler(e) {
      e.preventDefault();
      this.setState({
        src: this.state.e,
      });
    }
      return(
        <Router>
        <div className="wrapper">
          <Panel action={this.handler}/>
          <Switch>
            <Route exact path='/weather' component={Weather}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
          <Sidebar/>
          
          <Playbar src={this.state.src}/>
        </div>
        </Router>
      )
  }
}

export default Home1;