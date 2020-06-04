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
          <input type="radio" name="component" value="customSizes" />
          <span>Custom Sizes</span>
        </label>
        <label>
          <input type="radio" name="component" value="card" />
          <span>Card</span>
        </label>
        <label>
          <input type="radio" name="component" value="forms" />
          <span>Forms</span>
        </label>
        <label>
          <input type="radio" name="component" value="links" />
          <span>Links</span>
        </label>
        <label>
          <input type="radio" name="component" value="scaleText" />
          <span>Scale Text</span>
        </label>
        <label>
          <input type="radio" name="component" value="title" />
          <span>Title</span>
        </label>
        <label>
          <input type="radio" name="component" value="container" />
          <span>Container</span>
        </label>
        <label>
          <input type="radio" name="component" value="flexbox" />
          <span>Flexbox</span>
        </label>
        <label>
          <input type="radio" name="component" value="table" />
          <span>Table</span>
        </label>
      </form>
    </div>
  );
};

export default ComponentForm;
