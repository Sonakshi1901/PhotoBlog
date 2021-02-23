import React from "react";
import "./SignUp.css";

const SignUp = (props) => {

  return (
    <div className="SignUp">
      <div className="SignUp__container">
        <h2>Sign Up</h2>

      <div className="SignUp__username">
       <h3>Enter a username</h3>
       <h3>{props.username}</h3>
      </div>

      <div className="SignUp__password">
       <h3>Enter a password</h3>
       <h3>{props.password}</h3>
      </div>

      <div className="SignUp__password">
       <h3>Enter an email address</h3>
       <h3>{props.email}</h3>
      </div>

      </div>
    </div>
  );
};

export default SignUp;
