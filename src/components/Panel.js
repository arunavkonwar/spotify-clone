import React, { Component} from 'react';
import '../App.css';
import Navigation from './Navigation';
import SongList from './SongList'
import Searchpanel from './Searchpanel'
import Library from './Library';


class Panel extends Component {
  constructor(props){
    super(props);
    this.testVariable="lol"
    this.state={
      user:{},   
    }
  }

  componentDidMount(){
      console.log('HELLO FROM THE COMPONENT DID MOUNT')
      /*
      axios.get('http://localhost:3000/')
      .then((response) => {
        console.log(response.data)
        console.log("FUCK THIS SHIT")
        this.setState({
          rawData: response.data
        })
      });
      */  
  }

  render(){
      return(
        <div className="main-panel">
        
        {this.props.focuspanel.songs && <SongList action={this.props.action} rawData={this.props.rawData}/>}
        {this.props.focuspanel.search && <Searchpanel rawData={this.props.rawData}/>}
        {this.props.focuspanel.library && <Library/>}
        </div>
      );
  }
}


export default Panel;