import React from "react";
import Button from "react-bootstrap/Button";
import {formSchemaObject} from "../../store"
import {useRecoilValue} from 'recoil';

const ButtonGroup = () => {
  const formData = useRecoilValue(formSchemaObject);
  return (
    <>
      <Button style={{backgroundColor: formData.blue??"blue"}} variant="primary">Blue</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"blue"}} variant="primary">Aqua</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"blue"}} variant="primary">Teal</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"blue"}} variant="primary">Olive</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"green"}} variant="primary">Green</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"lime"}} variant="primary">Lime</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"yellow"}} variant="primary">Yellow</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"orange"}} variant="primary">Orange</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"red"}} variant="primary">Red</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"fuchsia"}} variant="primary">Fuchsia</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"purple"}} variant="primary">Purple</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"maroon"}} variant="primary">Maroon</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"white"}} variant="primary">White</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"gray"}} variant="primary">Gray</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"silver"}} variant="primary">Silver</Button>{" "}
      <Button style={{backgroundColor: formData.blue??"black"}} variant="primary">Black</Button>{" "}
    </>
  );
};

export default ButtonGroup;
