import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./LoginPage.css";
import google from "../../Images/google.png";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";


!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [login, setLogin] = useState(false);
  const [isSignIn, setIsSignIn] = useContext(UserContext);

  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        console.log("credential", credential);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
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
    const updateUser = (name) => {

      const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: name

      }).then(res => {
        console.log("user updated", res);
        setIsSignIn(user);
        // Update successful.
      }).catch(function(error) {
        console.log('error', error);
        // An error happened.
      });
    }  
    const handleSignUp = (event) => {
      event.preventDefault();
      //console.log("sign in name", isSignIn.name);
      if(isSignIn.email && isSignIn.password){
        console.log("is Sign in", isSignIn);
        firebase.auth().createUserWithEmailAndPassword(isSignIn.email, isSignIn.password)
        .then((userCredential) => {
          updateUser(isSignIn.name);
          const newUser = {...isSignIn};
          setIsSignIn(newUser); 
          history.replace(from);
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
      }
      
    }

    const handleBlur = (event) => {
      let validField = true;
      if(event.target.name === 'email'){
        validField = /\S+@\S+\.\S+/.test(event.target.value);
      }
      if(event.target.name === 'password'){
        validField = /^(?=.*[0-9])(?=.*[a-z])/.test(event.target.value);
      }
      if(validField){
        const newUser = {...isSignIn};
        newUser[event.target.name] = event.target.value;
        setIsSignIn(newUser);
      }
    }

    const logIn = (event) => {
      event.preventDefault();
      firebase.auth().signInWithEmailAndPassword(isSignIn.email, isSignIn.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setIsSignIn(user);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
  return (
    <div>
      <Navigation></Navigation>
      <div className="loginPage">
        {/* create account here */}
        {!login && (
          <div>
            <h3>Create Account</h3>
            <form>
              <input onBlur={handleBlur} type="text" name='name' placeholder="Name" />
              <input onBlur={handleBlur} type="text" name='email' placeholder="Username or Email" />
              <input onBlur={handleBlur} type="password" name='password' placeholder="Password" />
              <input onBlur={handleBlur} type="password" name='confirmPassword' placeholder="Confirm Password" />
              <button onClick={handleSignUp}>Create an Account</button>
            </form>
            <div className="text-center">
              Already have an account?{" "}
              <Link onClick={() => setLogin(true)}>Login</Link>
              
            </div>
          </div>
        )}

        {/* login here */}
        {login && (
          <div>
            <h3>Login</h3>
            <form>
              <input onBlur={handleBlur} type="text" name='email' placeholder="Email" />
              <input onBlur={handleBlur} type="password" name='password' placeholder="Password" />
              <button type="submit" onClick= {logIn}>Login</button>
            </form>
            <div className="d-flex justify-content-between my-3">
              <div>
                <input className="mr-1" type="checkbox" name="" id="" />
                Remember Me
              </div>
              <Link>Forgot Password?</Link>
            </div>
            <div className="text-center">
              Don't have an account?{" "}
              <Link onClick={() => {setLogin(false)}  }>Create an account </Link>
              
            </div>
          </div>
        )}

        {/* facebook and google button handle here */}
        <div className="mx-auto">
          <div className="line mx-auto">
            <span className="line__text">Or</span>
            <hr />
          </div>
          <div className="continue__with">
            <img src={google} alt="Google" />
            <button onClick={googleSignIn}>Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
