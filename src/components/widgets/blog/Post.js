import React, { PropTypes } from 'react';

import { items } from 'constants/static/items';

import BlogItem from './BlogItem';

const Post = ({ params }) => (
  <BlogItem {...(items[params.id - 1])} />
);

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
