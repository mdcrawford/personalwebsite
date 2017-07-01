import React, { Component } from "react";
import SiteNavbar from "./SiteNavbar.js";
import AboutMeCarousel from "./AboutMeCarousel.js";
import { Image } from "react-bootstrap";
import "./App.css";
import ProfilePicture from "./assets/profile.jpg";
import WorkExperienceGrid from "./WorkExperienceGrid.js";
import ProjectGrid from "./ProjectGrid.js";
import ContactGrid from "./ContactGrid.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNavbar />

        <div className="IntroductionContainer" id="intro">
          <Image src={ProfilePicture} width={150} height={150} circle />
          <h1> Hey! I'm Michael Crawford. I see you found my website. </h1>
          <br />
          <h3> While you're here, let's take you on a tour of what I do. </h3>
        </div>

        <div className="AboutMe" id="aboutme">
          <h1> About Me </h1>
          <br />
          <div className="AboutMeCarousel">
            <AboutMeCarousel />
          </div>
        </div>

        <div className="WorkExperience" id="mywork">
          <h1> Work Experience </h1>
          <br />
          <WorkExperienceGrid />
        </div>

        <div className="MyProjects" id="myprojects">
          <h1> My Projects </h1>
          <br />
          <ProjectGrid />
          <br />
          <p style={{ fontSize: 20 }}>
            You can find more of what I'm up to at my Github
            <a href="https://github.com/mdcrawford"> here! </a>
          </p>
        </div>

        <div className="ContactMe" id="contactme">
          <h1> Contact Me </h1>
          <br />
          <ContactGrid />
        </div>
      </div>
    );
  }
}

export default App;
