import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:'',
            password:''
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{    
        }).catch((error)=> {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error)=>{
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(  
            <div>
                <h1>Hello from the Login page</h1>
                <form>
                <div>
                <input type="email" value={this.state.email} class="form-control" name="email" placeholder="Enter email" onChange={this.handleChange}></input><br></br>
                <input type="password" value={this.state.password} class="form-control" name="password" placeholder="Enter password" onChange={this.handleChange}></input><br></br>
                <button type="submit" class="btn btn-default" onClick={this.login}>Login</button>
                <button type="submit" class="btn btn-default" onClick={this.signup}>Sign Up</button>
                </div>
                </form>
            </div>
        );
    }
}

export default Login;