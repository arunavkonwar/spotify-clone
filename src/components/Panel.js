import React, { Component} from 'react';
import '../App.css';
import SongList from './SongList'
import Searchpanel from './Searchpanel'
import Library from './Library';
import SongPanel from './SongPanel'


class Panel extends Component {
  render(){
      return(
        <div className="main-panel">  
          {this.props.focuspanel.songs && <SongPanel action={this.props.action} rawData={this.props.rawData}/>}
          {this.props.focuspanel.search && <Searchpanel rawData={this.props.rawData}/>}
          {this.props.focuspanel.library && <Library/>}
        </div>
      );
  }
}


export default Panel;