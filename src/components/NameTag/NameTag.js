import React from 'react';
import ColorSelector from '../ColorSelector/ColorSelector.js';
import TextSelector from '../TextSelector/TextSelector.js';
import Shape from '../Shape/Shape.js';

import { useNameTag } from '../../hooks/useNameTag.js';

const NameTag = () => {

  const { fontColor, backgroundColor, text, handleFontChange, handleBackgroundChange, handleTextChange } = useNameTag();

  return (
    <>
      <h1>NameTag App</h1>
      <ColorSelector fontColor={fontColor} backgroundColor={backgroundColor} handleFontChange={handleFontChange} handleBackgroundChange={handleBackgroundChange}/> 

      <TextSelector text={text} handleTextChange={handleTextChange}/>

      <Shape ontColor={fontColor} backgroundColor={backgroundColor} text={text}/>
    </>
  );
}; 

export default NameTag; 

