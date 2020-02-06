//container component, contains state, uses the other components 
import React, { useState } from 'react';
import ColorSelector from './ColorSelector/ColorSelector.js';
import TextSelector from './TextSelector/TextSelector.js';

const NameTag = () => {
  [color, setColor] = useState('blue'); 
  [text, setText] = useState('hello');

  // handleColorSelection = ({ target }) => {

  //   const color = target.value; 
  //   setColor(color); 

  // }; 

  return (
    <>
      <h1>NameTag App</h1>
      <ColorSelector value={color} /> 
      <TextSelector />

    </>
  );
}; 


export default NameTag; 

