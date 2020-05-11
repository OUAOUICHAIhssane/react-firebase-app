
import React, { useCallback, useContext } from "react";
import {  withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./auth.js";
import { signInWithGoogle } from "./base"



const SignIn = ({ history }) => {
  function signIn() {
    signInWithGoogle()
  }
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

 
    return (
      <div className="container">
        <form className="white" onSubmit={handleLogin}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder="Email"  />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder="Password" />
          </div>
          <div className="input-field">
            <button type="submit" className="btn blue lighten-1 z-depth-0">Login</button>
            <button 
    
  
    className="btn red lighten-1 z-depth-0"onClick={signIn} >Sign in with Google

    </button>
          </div>
        </form>
      </div>
    )
  }


export default withRouter(SignIn);