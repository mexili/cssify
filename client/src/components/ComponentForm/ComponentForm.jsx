import React from "react";
import { useRecoilState } from "recoil";
import "./ComponentForm.css";

import { selectedComponent } from "../../store";
const ComponentForm = (props) => {
  const [comp, setselectedComponent] = useRecoilState(selectedComponent);
  const setComponent = (event) => {
    setselectedComponent(event.target.value);
  };
  return (
    <div>
      <span>Select the component</span>
      <form onChange={setComponent}>
        <label>
          <input type="radio" name="component" value="button" />
          <span>Button</span>
        </label>
        <label>
          <input type="radio" name="component" value="typography" />
          <span>Typography</span>
        </label>
        <label>
          <input type="radio" name="component" value="alert" />
          <span>Alert</span>
        </label>
      </form>
    </div>
  );
};

export default ComponentForm;
