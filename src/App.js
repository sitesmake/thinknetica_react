import React from 'react';

import { Router, browserHistory } from 'react-router';

import routes from 'routes';

const App = () => (
  <Router history={browserHistory} routes={routes} />
);

// <MainLayout>
//   <BlogPage posts={ items }/>
// </MainLayout>

export default App;
