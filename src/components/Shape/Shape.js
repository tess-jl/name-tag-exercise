import React from 'react'; 
import PropTypes from 'prop-types';

const Shape = ({ fontColor, backgroundColor, text }) => (
  <div style={{ width: '100px', height:'100px', backgroundColor: decodeURIComponent(backgroundColor), color: decodeURIComponent(fontColor) }}>{text}</div>
);

Shape.propTypes = {
  fontColor: PropTypes.string, 
  backgroundColor: PropTypes.string, 
  text: PropTypes.string
}; 

export default Shape; 
