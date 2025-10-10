import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;

  return (
    <button
      className={classname}  // ✅ classname should come here
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}  {/* ✅ label should come here */}
    </button>
  );
};

export default ColourSelector;       


