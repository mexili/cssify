import React from "react";
import "./ComponentForm.css";

const ComponentForm = (props) => {
  const setComponent = (event) => {
    props.getComponent(event.target.value);
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
          <input type="radio" name="component" value="card" />
          <span>Card</span>
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
