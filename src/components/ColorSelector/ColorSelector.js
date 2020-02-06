import React from 'react'; 
import PropTypes from 'prop-types';


const ColorSelector = ({ color, handleChange }) => (
  <input type="color" value={color} onChange={handleChange} />
); 

ColorSelector.propTypes = {
  handleChange: PropTypes.func.isRequired, 
  color: PropTypes.string.isRequired
};

export default ColorSelector;
