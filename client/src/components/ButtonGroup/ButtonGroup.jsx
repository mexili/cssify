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
        Navy
      </button>{" "}
      <button
        style={{ backgroundColor: formData.blue ?? "blue" }}
        className="white"
      >
        Blue
      </button>{" "}
      <button
        style={{ backgroundColor: formData.aqua ?? "aqua" }}
        className="white"
      >
        Aqua
      </button>{" "}
      <button
        style={{ backgroundColor: formData.teal ?? "teal" }}
        className="white"
      >
        Teal
      </button>{" "}
      <button
        style={{ backgroundColor: formData.olive ?? "olive" }}
        className="white"
      >
        Olive
      </button>{" "}
      <button
        style={{ backgroundColor: formData.green ?? "green" }}
        className="white"
      >
        Green
      </button>{" "}
      <button
        style={{ backgroundColor: formData.lime ?? "lime" }}
        className="white"
      >
        Lime
      </button>{" "}
      <button
        style={{ backgroundColor: formData.yellow ?? "yellow" }}
        className="white"
      >
        Yellow
      </button>
      <button
        style={{ backgroundColor: formData.yellow ?? "orange" }}
        className="white"
      >
        Orange
      </button>
      <button
        style={{ backgroundColor: formData.red ?? "red" }}
        className="white"
      >
        Red
      </button>
      <button
        style={{ backgroundColor: formData.fuchsia ?? "fuchsia" }}
        className="white"
      >
        Fuchsia
      </button>
      <button
        style={{ backgroundColor: formData.maroon ?? "maroon" }}
        className="white"
      >
        Maroon
      </button>
      <button
        style={{ backgroundColor: formData.white ?? "white" }}
        className="black"
      >
        White
      </button>
      <button
        style={{ backgroundColor: formData.gray ?? "gray" }}
        className="white"
      >
        Gray
      </button>
      <button
        style={{ backgroundColor: formData.black ?? "black" }}
        className="white"
      >
        Black
      </button>
    </>
  );
};

export default ButtonGroup;
