import React, { useState } from 'react'; 
import PropTypes from 'prop-types';


const TextSelector = ({ text, handleChange }) => {
  [text, setText] = useState('name');

  return (
    <input type="text" value={text} placeholder="Your Name" onChange={({ target }) => setText(target.value)} />
  );
}; 

TextSelector.propTypes = {
  handleChange: PropTypes.func.isRequired, 
  text: PropTypes.string.isRequired
};

export default TextSelector;
