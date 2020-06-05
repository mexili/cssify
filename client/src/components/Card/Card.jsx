import React from "react";
import { formSchemaObject } from "../../store";
import { useRecoilValue } from "recoil";

const Card = () => {
  const formData = useRecoilValue(formSchemaObject);

  return (
    <div className="box">
      <p style={{color: formData.black??'black'}}>Box element.</p>
    </div>
  );
};

export default Card;
