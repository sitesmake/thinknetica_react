import React from 'react';

import { items } from 'constants/static/items';

import BlogPage from 'components/BlogPage';

const App = () => (
  <BlogPage posts={ items }/>
);

export default App;
