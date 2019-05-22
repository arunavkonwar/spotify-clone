import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';

class Login1 extends Component {
    render(){
        return(  
            <div>
                <div className="wrapper">
                    <Panel/>
                    <Sidebar/>
                    <Playbar/>
                </div>
            </div>
        );
    }
}

export default Login1;