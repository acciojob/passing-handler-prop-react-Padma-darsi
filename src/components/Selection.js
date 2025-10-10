import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)} // ✅ pass handler
      style={selectionStyle} // ✅ apply selected color
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;


