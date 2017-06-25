import React from 'react';

const { DOM, PropTypes }  = React;

const Image = ({src, width, height, alt}) => (
  DOM.img({src, width, height, alt})
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

export default Image;
