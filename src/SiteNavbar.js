import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class SiteNavbar extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#intro">Michael Crawford</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#aboutme">
              About Me
            </NavItem>
            <NavItem eventKey={2} href="#mywork">
              My Work
            </NavItem>
            <NavItem eventKey={2} href="#myprojects">
              My Projects
            </NavItem>
            <NavItem eventKey={2} href="#contactme">
              Contact Me
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
