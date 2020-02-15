import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';
import Playbar from './components/Playbar'
import Panel from './components/Panel'
import Sidebar from './components/Sidebar'

class Login1 extends Component {
    render(){
        return(  
            <div>
                <div className="wrapper">
                    <Panel/>
                    <Playbar/>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}

export default Login1;