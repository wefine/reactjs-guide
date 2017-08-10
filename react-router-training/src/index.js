import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import App from './App';
import './index.css';
import About from './modules/About'
import Home from './modules/Home'
import NotFound from './modules/NotFound'
import Repo from './modules/Repo'
import Repos from './modules/Repos'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="repos" component={Repos}>
                <Route path=":userName/:repoName" component={Repo} />
            </Route>

            <Route path="about" component={About} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();
