import React from 'react'; 
import PropTypes from 'prop-types';


const TextSelector = ({ text, handleTextChange }) => {

  return (
    <input type="text" value={text} placeholder="Your Name" onChange={({ target }) => handleTextChange(target.value)} />
  );
}; 

TextSelector.propTypes = {
  handleTextChange: PropTypes.func.isRequired, 
  text: PropTypes.string.isRequired
};

export default TextSelector;
