import React from "react";
import "./SignIn.css";

const SignIn = (props) => {

  return (
    <div className="SignIn">
      <div className="SignIn__container">
        <div className="SignIn__header">
          <span className="SignIn__header__text">Sign In</span>
        </div>

        <span className="SignIn__logo1"></span>
        <span className="SignIn__logo2"></span>
        <span className="SignIn__logo3"></span>

        <div className="SignIn__username">
         <input type="text" placeholder="Enter your username"/>
         <span>{props.name}</span>
        </div>

        <button className="SignIn__next1"></button>
        <span className="SignIn__next2"></span>
        <span className="SignIn__next3"></span>


        <div className="SignIn__password">
         <input type="password" placeholder="Enter your password"/>
         <span>{props.password}</span>
         <a href="##" className="SignIn__forgotpass">Forgot Password?</a>
        </div>

        <a href="##" className="SignUp__change">Wanna Sign Up?</a>

      </div>
    </div>
  );
};

export default SignIn;
