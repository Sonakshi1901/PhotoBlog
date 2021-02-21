import React from "react";
import "./Home.css";
import PhotoCard from "../Post/PhotoCard"

const Home = () => {

  return (
    <div className="home">
      <div className="home__header">
        <h2>PhotoBlog</h2>
          <div className="home__post">
            <PhotoCard
             name="Username"
             caption="This is soo cool!!!"
             date="FEB 10, 2021"/>
            <PhotoCard
              name="Username2"
              caption="This is soo cool!!!"
              date="FEB 18, 2021"/>
              <PhotoCard
                name="Username3"
                caption="This is soo cool!!!"
                date="FEB 15, 2021"/>
          </div>
      </div>
    </div>
  );
};

export default Home;
