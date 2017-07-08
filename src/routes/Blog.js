// import React from 'react';

import MainLayout from 'components/layouts/MainLayout';

import { postPath } from 'helpers/routes';

import BlogIndex from 'components/BlogIndex';
import BlogShow from 'components/BlogShow';
// import Post from 'components/widgets/blog/Post';

// const Hello = () => (<h1>Hello</h1>);
//
// const World = {
//   path: '/hello',
//   component: Hello
// };

const Index = {
  path: '/',
  component: BlogIndex
};

const Show = {
  path: postPath(),
  component: BlogShow
};

// const PostRoute = {
//   path: postsPath(),
//   component: Post
// };

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    // PostRoute,
    // World,
    Show
  ]
};
