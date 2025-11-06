import React, { useState } from "react";
import "../styles/App.css";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

const colourConfig = [
  { key: "blue", label: "Blue", value: "blue" },
  { key: "red", label: "Red", value: "red" },
  { key: "green", label: "Green", value: "green" },
];

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const applyColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div id="main">
      <div className="button-container">
        {colourConfig.map((color) => (
          <ColourSelector
            key={color.key}
            color={color}
            applyColor={applyColor}
          />
        ))}
      </div>

      <div className="boxes">
        <Selection applyColor={applyColor} selectedColor={selectedColor} />
        <Selection applyColor={applyColor} selectedColor={selectedColor} />
        <Selection applyColor={applyColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;
