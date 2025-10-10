import React from 'react';

const ColourSelector = ({ onColorChange }) => {
    return (
        <div>
            <button data-testid="blue" onClick={() => onColorChange('blue')}>Blue</button>
            <button data-testid="orange" onClick={() => onColorChange('orange')}>Orange</button>
            <button data-testid="green" onClick={() => onColorChange('green')}>Green</button>
        </div>
    );
};

export default ColourSelector;
