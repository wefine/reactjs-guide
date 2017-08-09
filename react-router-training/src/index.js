import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Route, Router } from 'react-router'
import App from './App';
import './index.css';
import About from './modules/About'
import Repos from './modules/Repos'
import NotFound from './modules/NotFound'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/repos" component={Repos} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
