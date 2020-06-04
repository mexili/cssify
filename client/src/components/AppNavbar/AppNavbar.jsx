import React, { Component } from "react";
import logo from "../../assets/images/icon.svg";
class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="flex-center pt-5 pb-5">
          <div
            href="#home"
            className="flex-center"
            style={{
              flexDirection: "column",
            }}
          >
            <img
              alt="cssify logo"
              src={logo}
              width="60"
              height="60"
              className="mr-2 mt-2"
            />{" "}
            <h1 className="size-1">CSSify</h1>
            <p className="italic">Scaffold a CSS framework in seconds</p>
          </div>
        </div>
      </>
    );
  }
}

export default AppNavbar;
