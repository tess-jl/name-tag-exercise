//container component, contains state, uses the other components 
import React, { useState, useEffect } from 'react';
import ColorSelector from '../ColorSelector/ColorSelector.js';
import TextSelector from '../TextSelector/TextSelector.js';
import Shape from '../Shape/Shape.js';
import PropTypes from 'prop-types';

const NameTag = () => {
  [fontColor, setFontColor] = useState('blue');
  [backgroundColor, setBackgroundColor] = useState('lightblue');
  const handleFontChange = ({ target }) => setFontColor(target.value);
  const handleBackgroundChange = ({ target }) => setBackgroundColor(target.value);

  useEffect(() => {
    handleFontChange(); 
  }, [fontColor]);

  [text, setText] = useState('hello');
  const handleTextChange = ({ target }) => setText(target.value);

  return (
    <>
      <h1>NameTag App</h1>
      <ColorSelector fontColor={fontColor} handleFontChange={handleFontChange} backgroundColor={backgroundColor} handleBackgroundChange={handleBackgroundChange}/> 

      <TextSelector text={text} handleTextChange={handleTextChange} />

      <Shape />
    </>
  );
}; 

NameTag.propTypes = {
  text: PropTypes.string.isRequired, 
  

};


export default NameTag; 

