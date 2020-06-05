import React from "react";
import { formSchemaObject } from "../../store";
import { useRecoilValue } from "recoil";

const Title = () => {
  const formData = useRecoilValue(formSchemaObject);
  return <p className="title" style={{color:formData.black}}>Sans-serif title.</p>;
};

export default Title;
