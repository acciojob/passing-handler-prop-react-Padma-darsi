import React, { useState } from "react";

const Selection = ({ selectedColor }) => {
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    setBgColor(selectedColor);
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={{
        width: "100px",
        height: "100px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: bgColor,
        cursor: "pointer",
      }}
    ></div>
  );
};

export default Selection;

