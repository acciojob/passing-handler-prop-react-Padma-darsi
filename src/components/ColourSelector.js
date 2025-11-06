import React from "react";

const ColourSelector = ({ color, applyColor }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color.value, color: "white", margin: "5px" }}
      onClick={() => applyColor(color.value)}
    >
      {color.label}
    </button>
  );
};

export default ColourSelector;




