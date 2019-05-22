import React, { Component} from 'react';
import '../App.css';
import fire from '../config/fire';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './Weather'
import Contact from './Contact'
import Sidebar from './Sidebar'
import Panel from './Panel'
import Playbar from './Playbar';

class Home1 extends Component {
  constructor(props){
      super(props);
      this.logout=this.logout.bind(this)
  }

  componentDidMount(){
      
  }

  logout() {
      fire.auth().signOut();
  }
  render(){
      return(
        <Router>
        <div className="wrapper">
          <Panel/>
            <Switch>
              <Route exact path='/weather' component={Weather}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
            <Sidebar/>
            <Playbar/>
        </div>
        </Router>
      )
  }
}

export default Home1;