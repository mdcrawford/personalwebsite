import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import WebLogo from "./assets/web.png";
import PortalLogo from "./assets/portal-logo.png";
import PomodoroPicture from "./assets/pomodoro.jpg";

export default class WorkExperienceGrid extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={4}>
              <a href="https://github.com/mdcrawford/personalwebsite">
                <Image src={WebLogo} height={200} width={200} circle />
              </a>
              <p>
                {" "}This very site! I built the majority of what you're seeing
                in a single day using ReactJS and React-Bootstrap. Click the
                above image to check out the source code on Github, and feel
                free to take inspiration from the styling for your own site. {" "}
              </p>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <a href="https://mercury-development.firebaseapp.com/">
                <Image src={PortalLogo} height={200} width={200} circle />
              </a>
              <p>
                {" "}I worked on the original version of the Mercury Development
                Platform for Portal Analytics, a top tech consulting firm in
                Charlottesville. The platform's internal functionality helps
                current interns in their day-to-day engineering lives while also
                connecting them with previous interns. Externally, I worked on a
                contract submission form for outsiders to approach Portal
                Analytics with potential work for current interns or alumni of
                the program.{" "}
              </p>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <a href="https://github.com/Portal-analytics/swe-tomato">
                <Image src={PomodoroPicture} height={200} width={200} circle />
              </a>
              <p>
                {" "}In an intense two day Hackathon, a small team of 10 budding
                software engineers (myself included) built this Pomodoro Timer
                using ReactJS and Google Firebase. This Timer allows Google
                users to keep tabs on their previously completed tasks while
                giving them 25 minutes for their current tasks before taking a
                break.{" "}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
