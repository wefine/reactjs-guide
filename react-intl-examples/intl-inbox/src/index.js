import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { IntlProvider } from 'react-intl';


ReactDOM.render(
    <IntlProvider locale={ "en" }>
        <App />
    </IntlProvider>, document.getElementById('root'));

