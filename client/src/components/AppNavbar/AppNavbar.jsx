import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/icon.svg";
class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            <span style={{ fontSize: 25 }}>CSSify</span>
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}

export default AppNavbar;
