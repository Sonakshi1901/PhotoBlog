import React from "react";
import "./SignUp.css";

const SignUp = (props) => {

  return (
    <div className="SignUp">
      <div className="SignUp__container">
        <div className="SignUp__header">
          <span className="SignUp__header__text">Sign Up</span>
        </div>

        <span className="SignUp__logo1"></span>
        <span className="SignUp__logo2"></span>
        <span className="SignUp__logo3"></span>

      <div className="SignUp__username">
       <input type="text" placeholder="Enter your username"/>
       <span>{props.username}</span>
      </div>

      <div className="SignUp__password">
       <input type="password" placeholder="Enter your password"/>
       <span>{props.password}</span>
      </div>

      <button className="SignUp__next1"></button>
      <span className="SignUp__next2"></span>
      <span className="SignUp__next3"></span>

      <div className="SignUp__email_address">
       <input type="email" placeholder="Enter your email address"/>
       <span>{props.email}</span>
      </div>

      <a href="##" className="SignIn__change">Wanna Sign In?</a>

      </div>
    </div>
  );
};

export default SignUp;
