import React from "react";
import { useRecoilState } from "recoil";

import ResizablePanels from "./ResizablePanels/ResizablePanels";
import ReactForm from "../../containers/ReactForm";

import ComponentForm from "../ComponentForm/ComponentForm";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Typography from "../Typography/Typography";
import { selectedComponent } from "../../store";

import "./Playground.css";

const Playground = () => {
  const [component, setComponent] = useRecoilState(selectedComponent);

  const renderComponent = (comp) => {
    switch (comp) {
      case "button":
        return <ButtonGroup />;
      case "typography":
        return <Typography />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="banner">
        <h2>Create your own stylesheet.</h2>
        <button
          type="button"
          className="bg-black white"
          style={{
            height: "60px",
          }}
        >
          Get CSS!
        </button>
      </div>
      <ResizablePanels>
        <ComponentForm />
        <ReactForm />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <span>Preview</span>
          {renderComponent(component)}
        </div>
      </ResizablePanels>
    </div>
  );
};

export default Playground;
