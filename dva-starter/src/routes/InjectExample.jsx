import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

const messages = defineMessages({
  description: {
    id: 'InjectExample.description',
    defaultMessage: '我是描述',
  },
  alert: {
    id: 'InjectExample.alert',
    defaultMessage: '我是提醒',
  },
  button: {
    id: 'InjectExample.button',
    defaultMessage: '弹窗',
  },
});

const InjectExample = ({ intl }) => {
  const handleClick = () => {
    alert(intl.formatMessage(messages.alert));
  };

  return (
    <div>
      <div style={{ margin: 10 }}>{intl.formatMessage(messages.description)}</div>
      <Button onClick={() => handleClick()}>
        <FormattedMessage {...messages.button} />
      </Button>
    </div>
  );
};

InjectExample.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(InjectExample, {
  // 无状态组件必须设置为 false，没有Ref引用。
  withRef: false,
});
