import React from "react";
import { formSchemaObject } from "../../store";
import { useRecoilValue } from "recoil";

const Flexbox = () => {
  const formData = useRecoilValue(formSchemaObject);
  const styles = {
    'display': 'flex',
    flexDirection: formData.flexDirection??'row'
  }


  return (
    <div style={styles} className="container row is-fullheight flex-center bg-silver">
      <p className="size-7">Lorem ipsum.</p>
      <p className="size-7">Lorem ipsum.</p>
      <p className="size-7">Lorem ipsum.</p>
    </div>
  );
};

export default Flexbox;
