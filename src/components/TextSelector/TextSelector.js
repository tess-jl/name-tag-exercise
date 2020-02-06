import React from 'react'; 
import PropTypes from 'prop-types';


const TextSelector = ({ text, handleChange }) => (
  <input type="text" value={text} onChange={handleChange} />
); 

TextSelector.propTypes = {
  handleChange: PropTypes.func.isRequired, 
  text: PropTypes.string.isRequired
};

export default TextSelector;
