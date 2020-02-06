import React from 'react'; 
import PropTypes from 'prop-types';


const ColorSelector = ({ handleChange }) => (
  <input type="color" value="color" onChange={handleChange} />
); 

ColorSelector.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
