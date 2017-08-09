import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Route, Router } from 'react-router'
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
