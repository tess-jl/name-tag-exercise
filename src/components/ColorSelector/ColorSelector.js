import React from 'react'; 
import PropTypes from 'prop-types';


const ColorSelector = ({ fontColor, backgroundColor, handleFontChange, handleBackgroundChange }) => (
  <>
    <h3>select font color</h3>
    <input type="color" value={fontColor} onChange={({ target }) => handleFontChange(target.value)} />
    <h3>select background color</h3>
    <input type="color" value={backgroundColor} onChange={({ target }) => handleBackgroundChange(target.value)} />
  </>
);


ColorSelector.propTypes = {
  handleFontChange: PropTypes.func.isRequired, 
  handleBackgroundChange: PropTypes.func.isRequired, 
  fontColor: PropTypes.string, 
  backgroundColor: PropTypes.string
};

export default ColorSelector;
