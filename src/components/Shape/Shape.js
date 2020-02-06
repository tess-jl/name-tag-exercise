import React from 'react'; 
import PropTypes from 'prop-types';

const Shape = ({ fontColor, backgroundColor, text }) => (
  <div style={{ width: '100px', height:'100px', backgroundColor: decodeURIComponent(backgroundColor), color: decodeURIComponent(fontColor) }}>
    <textarea>{text}</textarea>
  </div>
);

Shape.propTypes = {
  fontColor: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired
}; 

export default Shape; 
