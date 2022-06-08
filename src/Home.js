import React from "react";
import styled from "styled-components";
import "./Home.css";
import profile from "./assets/sarah.jpg";
import Randomstrings from "./sentence";

const ProfileImage = styled.img`
  height: 30em;
  width: 25em;
  border-radius: 95px;
  margin: 30px 0px 0px 0px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    margin-right: 0px;
  }
`;

// import { Link } from "react-router-dom";
// import styled from "styled-components";

function Home() {
  return (
    <div>
      <div className="App">
        <div className="ContainerOne">
          <div className="Title">Hi🌞 I'm Sarah</div>
          <div className="animated-heading">
            I'm also a...
            <Randomstrings />
          </div>
          <ProfileImage src={profile} alt="Profile Picture" />
        </div>
        <div className="Work">
          <h2>click on the pictures to learn more!</h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
