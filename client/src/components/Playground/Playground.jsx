import React, { Component } from "react";
import ResizablePanels from "./ResizablePanels/ResizablePanels";
import ReactForm from "../../containers/ReactForm";
import Button from "react-bootstrap/Button";

import "./Playground.css";
import ComponentForm from "../ComponentForm/ComponentForm";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import CardComp from "../CardComp/CardComp";

class Playground extends Component {
  constructor() {
    super();
    this.state = {
      selectedComponent: "",
    };
  }

  getSelectedComponent = (comp) => {
    this.setState({
      selectedComponent: comp,
    });
  };

  renderComponent = (comp) => {
    switch (comp) {
      case "button":
        return <ButtonGroup />;
      case "card":
        return <CardComp />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <div className="banner">
          <h2>Create your own stylesheet.</h2>
          <Button variant="info">Get CSS!</Button>
        </div>
        <ResizablePanels>
          <ComponentForm getComponent={this.getSelectedComponent} />
          <ReactForm />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <span>Preview</span>
            {this.renderComponent(this.state.selectedComponent)}
          </div>
        </ResizablePanels>
      </div>
    );
  }
}

export default Playground;
