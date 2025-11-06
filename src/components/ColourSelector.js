import React from "react";

const ColourSelector = ({ color, applyColor }) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: color.value,
        color: "white",
        margin: "5px",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => applyColor(color.value)}
    >
      {color.label}
    </button>
  );
};

export default ColourSelector;





