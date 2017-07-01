import MainLayout from 'components/layouts/MainLayout';

import BlogPage from 'components/BlogPage';
import Post from 'components/widgets/blog/Post';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: '/posts/:id',
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
