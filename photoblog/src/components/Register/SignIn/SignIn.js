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
         <span className="SignIn__name">Enter your username</span>
         <span>{props.name}</span>
        </div>

        <span className="SignIn__next1"></span>
        <span className="SignIn__next2"></span>
        <span className="SignIn__next3"></span>


        <div className="SignIn__password">
         <span className="SignIn__user__password">Enter your password</span>
         <span>{props.password}</span>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
