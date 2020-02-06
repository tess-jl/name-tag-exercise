import React, { useState } from 'react'; 
import PropTypes from 'prop-types';


const ColorSelector = ({ handleSubmit }) => {
  [fontColor, setFontColor] = useState('blue');
  [backgroundColor, setBackgroundColor] = useState('lightblue');

  const handleFontChange = ({ target }) => setFontColor(target.value);
  const handleBackgroundChange = ({ target }) => setBackgroundColor(target.value);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>select font color</h3>
        <input type="color" value={fontColor} onChange={handleFontChange} />
        <h3>select background color</h3>
        <input type="color" value={backgroundColor} onChange={handleBackgroundChange} />
      </form> 
    </>
  );
}; 

ColorSelector.propTypes = {
  handleChange: PropTypes.func.isRequired, 
  color: PropTypes.string.isRequired
};

export default ColorSelector;
