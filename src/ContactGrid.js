import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import LinkedIn from "./assets/linkedin.svg";
import Email from "./assets/email.png";

export default class ContactGrid extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={6} md={3} mdOffset={3}>
            <a href="https://www.linkedin.com/in/michael-crawford1/">
              <Image src={LinkedIn} height={100} width={100} />
            </a>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <a href="mailto:mdc8wa@virginia.edu">
              <Image src={Email} height={100} width={100} circle />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}
