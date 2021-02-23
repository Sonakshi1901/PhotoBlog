import React from "react";
import "./Home.css";
import PhotoCard from "../Post/PhotoCard";
import SignIn from "../Register/SignIn/SignIn";

const Home = () => {

  return (
    <div className="home">
      <div className="home__header">
        <h2>PhotoBlog</h2>
          <div className="home__post">
            <SignIn/>

          </div>
      </div>
    </div>
  );
};

export default Home;
