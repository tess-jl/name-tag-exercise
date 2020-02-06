import { useState, useEffect } from 'react'; 

export const useNameTag = () => {
  const [fontColor, setFontColor] = useState('blue');
  const [backgroundColor, setBackgroundColor] = useState('lightblue');
  const [text, setText] = useState('hello');

  const handleFontChange = (fontColor) => {
    setFontColor(fontColor);
  };
  useEffect(() => {
    handleFontChange(); 
  }, [fontColor]);


  const handleBackgroundChange = (backgroundColor) => {
    setBackgroundColor(backgroundColor);
  };
  useEffect(() => {
    handleBackgroundChange(); 
  }, [backgroundColor]);


  const handleTextChange = (text) => {
    setText(text);
  };
  useEffect(() => {
    handleTextChange(); 
  }, [text]);


  return { fontColor, backgroundColor, text, handleFontChange, handleBackgroundChange, handleTextChange };

}; 
