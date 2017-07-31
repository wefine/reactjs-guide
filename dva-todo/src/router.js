import { Route, Router } from 'dva/router';
import React from 'react';
import IndexPage from './routes/IndexPage';

import List from './routes/List.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/List" component={List} />
    </Router>
  );
}

export default RouterConfig;
