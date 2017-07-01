import React from 'react';

import { items } from 'constants/static/items';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';

const App = () => (
  <MainLayout>
    <BlogPage posts={ items }/>
  </MainLayout>
);

export default App;
