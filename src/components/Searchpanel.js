import { NavLink } from 'react-router-dom'; 
import React, { Component} from 'react';
import '../App.css';
import Navigation from './Navigation';
import axios from 'axios';
import Song from './Song';


class Searchpanel extends Component {
  constructor(props){
    super(props);
    //this.handler = this.handler.bind(this);

    this.state = {
      src:'test-audio/Munich.mp3',
      elements: null
    };

    function handler(num){
      this.setState({
        src: this.state.num,
      });
    }
  }

  componentDidMount(){

    var elements=[]
    var ans={}
    // run json-server to get DATA from the link below
    axios.get('http://localhost:3000/albums')
    .then((response) => {
      //console.log(response.data)
      //this.setState({songs:response.data})
      ans=response.data

      for (var key in ans) {
        console.log(key, ans[key])
        elements.push(<Song songName={ans[key]["title"]} src={ans[key]["title"]} band={ans[key]['title']} action={this.props.action}/>)
      }

      this.setState({
        elements: elements,
      });
    });


      


    
  }

  render(){
    var elements=[]
    return(
        <div className="song-list"> 
          <h1>THIS IS THE SEARCH PANEL</h1>
          {this.state.elements}
        </div>
      );
  }
}


export default Searchpanel; 