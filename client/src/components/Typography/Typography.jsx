import React from "react";

import { formSchemaObject } from "../../store";
import { useRecoilValue } from "recoil";

const DivComp = (props) => {

  const formData = useRecoilValue(formSchemaObject);
  
  return (
    <>
      <h1 className="size-1" style={{fontFamily: `${formData["serif-font"]} ${formData["sans-font"]}`}}>Heading 1</h1>{" "}
      <h1 className="size-2" style={{fontFamily: `${formData["serif-font"]} ${formData["sans-font"]}`}}>Heading 2</h1>{" "}
      <h1 className="size-3" style={{fontFamily: `${formData["serif-font"]} ${formData["sans-font"]}`}}>Heading 3</h1>{" "}
      <h1 className="size-4" style={{fontFamily: `${formData["serif-font"]} ${formData["sans-font"]}`}}>Heading 4</h1>{" "}
      <h1 className="size-5" style={{fontFamily: `${formData["serif-font"]} ${formData["sans-font"]}`}}>Heading 5</h1>{" "}
      <h1 className="size-6" style={{fontFamily: `${formData["serif-font"]} ${formData["sans-font"]}`}}>Heading 6</h1>{" "}
    </>
  );
};

export default DivComp;
