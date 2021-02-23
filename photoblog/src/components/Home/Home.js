import React from "react";
import "./Home.css";
import PhotoCard from "../Post/PhotoCard";
import SignIn from "../Register/SignIn/SignIn";
import SignUp from "../Register/SignUp/SignUp";

const Home = () => {

  return (
    <div className="home">
      <div className="home__header">
        <h2>PhotoBlog</h2>
          <div className="home__post">
            <SignUp/>
            {/*<SignIn/>*/}
            {/*<PhotoCard name= "username" date= "FEB 3, 2021" title= "A cat" caption= "This is so cool!!!"/>*/}
          </div>
      </div>
    </div>
  );
};

export default Home;
