import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from './zh.json';

window.appLocale = {
  messages: {
    ...zhMessages,
  },
  antd: null,
  locale: 'zh-Hans-CN',
  data: appLocaleData,
};
