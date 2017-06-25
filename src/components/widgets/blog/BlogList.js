import React from 'react';

import BlogItem from './BlogItem';

import _ from 'lo-dash';

const DOM  = React.DOM;

const BlogList = ({items, incrementLikes}) => (
  DOM.ul(
    null,
    _.map(
      items,
      (item) => (
        <li key={item.id}>
          <BlogItem {...item} incrementLikes={ incrementLikes }/>
        </li>
      )
    )
  )
);

export default BlogList;
