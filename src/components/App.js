import React, { useState } from "react";
import "../styles/App.css";
import Selection from "./Selection";
import ColourSelector from "./ColourSelector";


const colourConfig = [
  { key: "blue", label: "Blue", classname: "btn-blue", background: "rgb(34,193,195)" },
  { key: "orange", label: "Orange", classname: "btn-orange", background: "rgb(221,112,18)" },
  { key: "green", label: "Green", classname: "btn-green", background: "rgb(44,209,88)" },
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(""); // store color string

  // applyColor receives the child's state setter and gives it a style object
  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle({ background: selectedColor }); // MUST be an object
  };

  return (
    <div id="master">
      <h5 className="heading">Select the gradient and then the Box to change the color</h5>

      <div className="row">
        {colourConfig.map((c) => (
          <ColourSelector
            key={c.key}
            config={c}
            selectNextBackground={setSelectedColor} // set color string
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        {["selection1", "selection2", "selection3"].map((k) => (
          <Selection key={k} applyColor={applyColor} />
        ))}
      </div>
    </div>
  );
};

export default App;

