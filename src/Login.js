import React, { Component} from 'react';
import './App.css';
import fire from './config/fire';
import firebase from 'firebase';
import passport from 'passport'
import SpotifyStrategy from 'passport-spotify'

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.googleOAuth = this.googleOAuth.bind(this);
        this.spotifyOAuth = this.spotifyOAuth.bind(this)
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

       
    spotifyOAuth(e){
        e.preventDefault();
        const client_id ='298360b3a2484cc4b77dc2bbfe6a1519'
        const client_secret = '90a528e7bd6343968d1007da7b625087'
        passport.use(
          new SpotifyStrategy(
            {
              clientID: client_id,
              clientSecret: client_secret,
              callbackURL: 'http://localhost:3000/'
            },
            function(accessToken, refreshToken, expires_in, profile, done) {
              console.log(refreshToken)
            }
          )
        );
    }


    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(  
            <div>
                <h1>Hello from the Login page</h1>
                <h5>login using:arunavkonwar@gmail.com/</h5>
                <form>
                <div>
                <input type="email" value={this.state.email} class="form-control" name="email" placeholder="Enter email" onChange={this.handleChange}></input><br></br>
                <input type="password" value={this.state.password} class="form-control" name="password" placeholder="Enter password" onChange={this.handleChange}></input><br></br>
                <button type="submit" class="btn btn-default" onClick={this.login}>Login</button>
                <button type="submit" class="btn btn-default" onClick={this.signup}>Sign Up</button>
                <button type="submit" class="btn btn-default" onClick={this.googleOAuth}>Sign-in with Google</button>
                </div> 
                </form>
            </div>
        );
    }
}

export default Login;