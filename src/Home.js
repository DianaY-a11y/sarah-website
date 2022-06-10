import React from "react";
import styled from "styled-components";
import profile from "./assets/sarah.jpg";
import "./Home.css";
import Randomstrings from "./sentence";
import { useNavigate } from "react-router-dom";

const ProfileImage = styled.img`
  height: 30em;
  width: 23em;
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
  const navigate = useNavigate();
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
          <h2>click on the pictures to learn more about me!</h2>
          <div className="HorizontalWork">
            <div
              className="Box1"
              onClick={() => window.open("https://www.bestforteeth.org/")}
            />

            <div className="Box2" onClick={() => navigate("/sister")}></div>
          </div>
          <div className="HorizontalWork">
            <div className="Box3" />
            <div className="Box4" />
          </div>
          <div className="HorizontalWork">
            <div className="Box5" />
            <div className="Box6" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
