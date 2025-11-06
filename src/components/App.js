import React, { useState } from 'react';
import { Palette, Square } from 'lucide-react';

// --- 1. ColourSelector Component (Child 1) ---
// Renders the buttons and handles the click event, which calls the handler prop.
const ColourSelector = ({ colors, onColourSelect, currentSelection }) => {
  return (
    <div className="p-6 bg-white shadow-xl rounded-xl w-full max-w-lg mx-auto">
      <div className="flex items-center space-x-2 mb-4">
        <Palette className="h-6 w-6 text-indigo-500" />
        <h2 className="text-xl font-bold text-gray-800">Choose a Color</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColourSelect(color)}
            className={`
              w-full py-2 capitalize font-medium rounded-lg transition-all duration-200 ease-in-out
              shadow-md hover:shadow-lg focus:outline-none focus:ring-4
              ${color === currentSelection ? 'ring-offset-2 ring-indigo-500 border-2 border-indigo-600' : 'ring-transparent border-2 border-transparent'}
              
              ${color === 'red' ? 'bg-red-500 text-white' : ''}
              ${color === 'blue' ? 'bg-blue-500 text-white' : ''}
              ${color === 'green' ? 'bg-green-500 text-white' : ''}
              ${color === 'yellow' ? 'bg-yellow-400 text-gray-800' : ''}
            `}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- 2. Selection Component (Child 2) ---
// Receives the current selected color as a prop and applies it as a dynamic style.
const Selection = ({ selectedColour }) => {
  // Define the styling for the "fix-box" elements
  const boxStyle = {
    backgroundColor: selectedColour,
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl w-full max-w-lg mx-auto mt-8">
      <div className="flex items-center space-x-2 mb-4">
        <Square className="h-6 w-6 text-indigo-500" />
        <h2 className="text-xl font-bold text-gray-800">Selection Boxes</h2>
      </div>
      <div className="flex justify-around space-x-4">
        {/* Use the required className "fix-box" and apply the dynamic style */}
        <div className="fix-box h-20 w-20 rounded-xl shadow-lg border-4 border-gray-200" style={boxStyle}></div>
        <div className="fix-box h-20 w-20 rounded-xl shadow-lg border-4 border-gray-200" style={boxStyle}></div>
        <div className="fix-box h-20 w-20 rounded-xl shadow-lg border-4 border-gray-200" style={boxStyle}></div>
      </div>
      <p className="text-center mt-4 text-sm font-medium text-gray-600">
        Current Color: <span className={`uppercase font-extrabold ${selectedColour === 'gray' ? 'text-gray-500' : selectedColour === 'yellow' ? 'text-yellow-600' : 'text-indigo-500'}`}>{selectedColour}</span>
      </p>
    </div>
  );
};

// --- 3. App Component (Parent) ---
// Manages the state and passes the handler function (handleColourChange) as a prop.
const App = () => {
  // Boilerplate Step 1: Define the available colors
  const COLOUR_OPTIONS = ['red', 'blue', 'green', 'yellow'];

  // Boilerplate Step 2: Initialize state for the selected color (default to gray)
  const [selectedColour, setSelectedColour] = useState('gray');

  // Boilerplate Step 3: Define the handler function to update the state
  const handleColourChange = (color) => {
    setSelectedColour(color);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center font-sans">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        React Handler Prop Practice
      </h1>

      {/* ColourSelector receives the handler function as prop 'onColourSelect' */}
      <ColourSelector
        colors={COLOUR_OPTIONS}
        onColourSelect={handleColourChange}
        currentSelection={selectedColour}
      />

      {/* Selection receives the state value as prop 'selectedColour' */}
      <Selection selectedColour={selectedColour} />

      <footer className="mt-12 text-center text-gray-500 text-sm">
        Click a button to change the background color of the boxes below.
      </footer>
    </div>
  );
};

export default App;
