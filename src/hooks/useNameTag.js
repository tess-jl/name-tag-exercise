import { useState } from 'react'; 

export const useNameTag = () => {
  const [fontColor, setFontColor] = useState('blue');
  const [backgroundColor, setBackgroundColor] = useState('lightblue');
  const [text, setText] = useState('default name');

  const handleFontChange = (fontColor) => {
    setFontColor(fontColor);
  };

  const handleBackgroundChange = (backgroundColor) => {
    setBackgroundColor(backgroundColor);
  };

  const handleTextChange = (text) => {
    setText(text);
  };

  return { fontColor, backgroundColor, text, handleFontChange, handleBackgroundChange, handleTextChange };

}; 
