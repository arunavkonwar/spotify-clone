import React, { Component} from 'react';
import './Login.css';
import fire from './config/fire';
import firebase from 'firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.googleOAuth = this.googleOAuth.bind(this);

        this.state = {
            email: 'lol',
            password: null
          };
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

    
    googleOAuth(e){
        e.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(  
            <div>
                <div id="header">
                <div class="logo">
                </div>
                {/* <input type="email" value={this.state.email} class="form-control" name="email" placeholder="Enter email" onChange={this.handleChange}></input><br></br>
                <input type="password" value={this.state.password} class="form-control" name="password" placeholder="Enter password" onChange={this.handleChange}></input><br></br>
                <button type="submit" class="btn btn-default" onClick={this.login}>Login</button> */}
                <button type="submit" class="btn sign-in" onClick={this.googleOAuth}>Sign-in with Google</button>
                </div>
            </div>
        );
    }
}

export default Login;