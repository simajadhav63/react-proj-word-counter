import React, { useState } from 'react';

const Editor = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <textarea
      className="editor"
      value={text}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default Editor;
