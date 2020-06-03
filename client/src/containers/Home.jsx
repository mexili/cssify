import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { MyComponent, Button } from "./styled";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      div: "",
      button: "",
    };
  }

  handleInputChange = (event) => {
    const val = event.target.value;
    console.log(val);
    this.setState((prevState) => {
      return {
        ...prevState,
        div: val,
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl
              aria-label="Text input with checkbox"
              onChange={this.handleInputChange}
            />
          </InputGroup>
        </div>
        <div>
          <Button bgColor="white">Primary</Button>
        </div>
        <MyComponent myColor={this.state.div}>Hello World</MyComponent>
      </>
    );
  }
}

export default Home;
