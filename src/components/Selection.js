import React, { useState, useEffect } from "react";

const Selection = ({ applyColor, selectedColor }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(selectedColor);
  }, [selectedColor]);

  return (
    <div
      className="fix-box"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: bgColor,
        margin: "10px",
        border: "2px solid black",
      }}
    ></div>
  );
};

export default Selection;


