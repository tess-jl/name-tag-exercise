import React from 'react'; 
import PropTypes from 'prop-types';


const ColorSelector = ({ fontColor, backgroundColor, handleFontChange, handleBackgroundChange }) => {


  return (
    <>
      <h3>select font color</h3>
      <input type="color" value={fontColor} onChange={handleFontChange} />
      <h3>select background color</h3>
      <input type="color" value={backgroundColor} onChange={handleBackgroundChange} />
    </>
  );
}; 

ColorSelector.propTypes = {
  handleFontChange: PropTypes.func.isRequired, 
  handleBackgroundChange: PropTypes.func.isRequired, 
  fontColor: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.func.isRequired
};

export default ColorSelector;
