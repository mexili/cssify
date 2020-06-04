import React from "react";

const Container = () => {
  return (
    <div
      className="container breakout row bg-silver"
      style={{ minHeight: "9rem" }}
    >
      <div className="row border border--black">
        <div className="column border border--black">Row 1, Column 1</div>
        <div className="column border border--black">Row 1, Column 2</div>
        <div className="column border border--black">Row 1, Column 3</div>
      </div>
      <div className="row border border--black">
        <div className="column border border--black">Row 2, Column 1</div>
        <div className="column border border--black">Row 2, Column 2</div>
      </div>
    </div>
  );
};

export default Container;
