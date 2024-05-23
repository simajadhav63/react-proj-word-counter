import React from 'react';

const Toolbar = ({ onTransform, onClear, onCopy }) => {
  const handleTransform = (transformType) => {
    onTransform(transformType);
  };

  const handleClear = () => {
    onClear();
  };

  const handleCopy = () => {
    onCopy();
  };

  return (
    <div className="toolbar">
      <button onClick={() => handleTransform('uppercase')}>Uppercase</button>
      <button onClick={() => handleTransform('lowercase')}>Lowercase</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default Toolbar;
