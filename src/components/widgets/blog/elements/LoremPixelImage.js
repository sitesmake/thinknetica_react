import React from 'react';

const { PropTypes }  = React;

import Image from './Image';

const LoremPixelImage = ({src, width, height, alt}) => (
  <Image
    src={src}
    width={(Number(src.split('/')[3]) || width)}
    height={(Number(src.split('/')[4]) || height)}
    alt={alt}
  />
);

LoremPixelImage.defaultProps = {
  src: 'http://lorempixel.com/50/50',
  width: 50,
  height: 50,
  alt: 'Lorem Ipsum'
};

LoremPixelImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

export default LoremPixelImage;
