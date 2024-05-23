import React, { useState } from 'react';
import Editor from './componant/editor.js';
import Preview from './componant/preview.js';
import Toolbar from './componant/toolbar.js';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (newText) => {
    setText(newText);

    // Calculate word count
    const words = newText.trim().split(/\s+/);
    setWordCount(words.filter(word => word !== '').length);

    // Calculate character count (excluding spaces)
    setCharCount(newText.replace(/\s/g, '').length);
  };

  const handleTransform = (transformType) => {
    if (transformType === 'uppercase') {
      setText(text.toUpperCase());
    } else if (transformType === 'lowercase') {
      setText(text.toLowerCase());
    }
  };

  const handleClear = () => {
    setText('');
    setWordCount(0);
    setCharCount(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (



    <div className="app">

      <h1 className="heading">Word Counter Tool</h1>
      
      <div className="editor-container">
        <Editor onTextChange={handleTextChange} />
        <Preview text={text} />
      </div>

      <Toolbar
        onTransform={handleTransform}
        onClear={handleClear}
        onCopy={handleCopy}
      />
      <div className="counter">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
};

export default App;