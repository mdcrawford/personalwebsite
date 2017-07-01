import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import HackCville from "./assets/hackcville.png";
import RootsLogo from "./assets/roots-logo.jpg";
import HoneybakedLogo from "./assets/honeybaked.jpg";

export default class WorkExperienceGrid extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6} md={4}>
              <a href="https://www.facebook.com/rootsnaturalkitchen/">
                <Image src={RootsLogo} height={200} width={200} circle />
              </a>
              <p>
                {" "}I'm currently working to build a state-of-the-art Point of
                Sale system for Roots Natural Kitchen. Unlike current POS
                systems which fail to understand the needs of a restaurant
                General Manager, this system will organize data in clean and
                useful ways, streamline the labor management process, and
                revolutionize restaurant management. {" "}
              </p>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <a href="http://hackcville.com/summer/academy/index.html">
                <Image src={HackCville} height={200} width={200} circle />
              </a>
              <p>
                As a Software Engineering intern with HackCville, I spent six
                weeks learning ReactJS, Google Firebase, Git, and other parts of
                the web application design process. This culminated in building
                a full-stack application for future interns with our client
                Portal Analytics.
              </p>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <a href="http://www.honeybaked.com/">
                <Image src={HoneybakedLogo} height={200} width={200} circle />
              </a>
              <p>
                {" "}I've been helping my parents with their HoneyBaked Ham
                Richmond location since I was 13 years old. This café was where
                I first learned how to communicate with customers and provide a
                satisfactory experience for all parties involved. Plus, there
                were ham sandwiches for lunch. {" "}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
