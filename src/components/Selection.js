import React, { useEffect, useState } from 'react';

const Selection = ({ selectedColor }) => {
    const [boxColor, setBoxColor] = useState('');

    useEffect(() => {
        setBoxColor(selectedColor);
    }, [selectedColor]);

    return (
        <div>
            <div className="fix-box" style={{ backgroundColor: boxColor }}>Box 1</div>
            <div className="fix-box" style={{ backgroundColor: boxColor }}>Box 2</div>
            <div className="fix-box" style={{ backgroundColor: boxColor }}>Box 3</div>
        </div>
    );
};

export default Selection;

