import React from 'react'; 
import PropTypes from 'prop-types';


const TextSelector = ({ text, handleTextChange }) => {

  return (
    <>
      <h3>enter your name</h3>
      <input type="text" value={text} onChange={({ target }) => handleTextChange(target.value)} />
    </>
  );
}; 

TextSelector.propTypes = {
  handleTextChange: PropTypes.func.isRequired, 
  text: PropTypes.string
};

export default TextSelector;
