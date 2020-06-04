import React from "react";
import { formSchemaObject } from "../../store";
import { useRecoilValue } from "recoil";

const ButtonGroup = () => {
  const formData = useRecoilValue(formSchemaObject);
  return (
    <>
      <button
        style={{ backgroundColor: formData.blue ?? "skyblue" }}
        className="white"
      >
        Primary
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "fuchsia" }}
        className="white"
      >
        Secondary
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "green" }}
        className="white"
      >
        Success
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "yellow" }}
        className="white"
      >
        Warning
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "red" }}
        className="white"
      >
        Danger
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "navy" }}
        className="white"
      >
        Info
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "grey" }}
        className="black"
      >
        Light
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "black" }}
        className="white"
      >
        Dark
      </button>
    </>
  );
};

export default ButtonGroup;
