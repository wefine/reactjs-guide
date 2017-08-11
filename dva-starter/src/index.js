// global window
import { LocaleProvider } from 'antd';
import dva from 'dva';

import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import './index.less';

/* eslint-disable global-require */
const language = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

if (languageWithoutRegionCode === 'en') {
  require('./locales/en-US');
} else {
  require('./locales/zh-Hans-CN');
}
/* eslint-enable global-require */


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
// app.start('#root');

const App = app.start();

const appLocale = window.appLocale;

addLocaleData(appLocale.data);

ReactDOM.render(
  <LocaleProvider locale={appLocale.antd}>
    <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
      <App />
    </IntlProvider>
  </LocaleProvider>,
  document.getElementById('root'),
);
