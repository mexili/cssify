import React from "react";
import { formSchemaObject } from "../../store";
import { useRecoilValue } from "recoil";

const ButtonGroup = () => {
  const formData = useRecoilValue(formSchemaObject);
  return (
    <>
      <button
        style={{ backgroundColor: formData.navy ?? "navy" }}
        className="white"
      >
        Primary
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "blue" }}
        className="white"
      >
        Secondary
      </button>{" "}
      <button
        style={{ backgroundColor: formData.aqua ?? "aqua" }}
        className="white"
      >
        Success
      </button>{" "}
      <button
        style={{ backgroundColor: formData.teal ?? "teal" }}
        className="white"
      >
        Warning
      </button>{" "}
      <button
        style={{ backgroundColor: formData.olive ?? "olive" }}
        className="white"
      >
        Danger
      </button>{" "}
      <button
        style={{ backgroundColor: formData.green ?? "green" }}
        className="white"
      >
        Info
      </button>{" "}
      <button
        style={{ backgroundColor: formData.lime ?? "lime" }}
        className="black"
      >
        Light
      </button>{" "}
      <button
        style={{ backgroundColor: formData.yellow ?? "yellow" }}
        className="red"
      >
        Yellow
      </button>

      <button
        style={{ backgroundColor: formData.yellow ?? "orange" }}
        className="orange"
      >
        Orange
      </button>
      
      <button
        style={{ backgroundColor: formData.red ?? "red" }}
        className="black"
      >
        Red
      </button>

      <button
        style={{ backgroundColor: formData.fuchsia ?? "fuchsia" }}
        className="black"
      >
        Fuchsia
      </button>

      <button
        style={{ backgroundColor: formData.maroon ?? "maroon" }}
        className="red"
      >
        Maroon
      </button>

      <button
        style={{ backgroundColor: formData.white ?? "white" }}
        className="red"
      >
        White
      </button>

      <button
        style={{ backgroundColor: formData.gray ?? "gray" }}
        className="red"
      >
        Gray
      </button>

      <button
        style={{ backgroundColor: formData.black ?? "black" }}
        className="red"
      >
        Black
      </button>

    </>
  );
};

export default ButtonGroup;
