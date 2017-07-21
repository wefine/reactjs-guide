import { Route, Router } from 'dva/router';
import React from 'react';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history} >
      <Route path="/" component={IndexPage} />
    </Router >
  );
}

export default RouterConfig;
