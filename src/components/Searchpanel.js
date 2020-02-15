import React, { Component} from 'react';
import '../App.css';
import axios from 'axios';
import Song from './Song';


class Searchpanel extends Component {
  constructor(props){
    super(props);
    //this.handler = this.handler.bind(this);

    this.state = {
      src:'test-audio/Munich.mp3',
      elements: null,
      elementsRaw: null,
      searchterm:'',
    };

    function handler(num){
      this.setState({
        src: this.state.num,
      });
    }
  }

  searchLookup = (e) => {
    var searchResults = []
    var ans = this.state.elementsRaw
    e.preventDefault();

    for (var key in ans) {
      if (ans[key]["title"].includes(e.target.value)){
        searchResults.push(<Song title={ans[key]["title"]} album={ans[key]["album"]} artist={ans[key]['artist']} action={this.props.action}/>)
      } 
    }

    this.setState({
      elements: searchResults
    });

  };

  componentDidMount(){

    var elements=[]

    for (var key in this.props.rawData) {
      elements.push(<Song title={this.props.rawData[key]["title"]} artist={this.props.rawData[key]["artist"]} album={this.props.rawData[key]["album"]} action={this.props.action}/>)
    }

    this.setState({
      elements: elements,
      elementsRaw: this.props.rawData
    });
  }

  render(){
    var elements=[]
    return(
        <div>
          <div class="filter-bar">
            <input type="email" value={this.state.email} class="form-control" name="searchTerm" placeholder="Search for your band" onChange={this.searchLookup}></input><br></br>
          </div>
          <div className="song-list">
            {this.state.elements}
          </div>
        </div>
      );
  }
}


export default Searchpanel; 