import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" }); // object

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)} // applyColor will pass an object
      style={selectionStyle} // MUST be an object
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;

