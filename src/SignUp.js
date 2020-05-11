import React, {useCallback } from 'react';
import { withRouter } from "react-router";
import app from "./base";



  
const SignUp = ({ history }) => {
 

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const { email, password,  } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value, );
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);
    
    return (
                
        
      <div className="container">
        
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder="Email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password'placeholder="Password" />
          </div>
        
          
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Sign Up</button>
            
          </div>
        </form>
      </div>
      
 )
}

  


export default withRouter(SignUp) 