import React from 'react';
import moment from 'moment';

const { PropTypes }  = React;

import LoremPixelImage from './elements/LoremPixelImage';
import TextBox from './elements/TextBox';

const Post = ({ image, meta, id, text }) => (
  <div>
    <h1>The Post by {meta.author}</h1>
    <LoremPixelImage {...image} />
    <TextBox>
      text: {text},
      created at: {meta.createdAt},
      updated at: {meta.updatedAt},
      record: #{id}
    </TextBox>
  </div>
);

Post.defaultProps = {
  image: {
    src: 'http://lorempixel.com/50/50',
    width: 50,
    height: 50,
    alt: 'React - super!'
  },
  text: 'Untitled Blog',
  id: Date.now(),
  meta: {
    author: 'Me',
    createdAt: moment(0).format('lll'),
    updatedAt: moment().format('lll')
  }
};

Post.propTypes = {
  image: PropTypes.shape(LoremPixelImage.propTypes),
  text: PropTypes.string,
  id: PropTypes.number,
  incrementLikes: PropTypes.func,
  meta: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
};

export default Post;
