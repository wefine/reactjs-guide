import { Button, DatePicker, Icon, Pagination } from 'antd';
import { connect } from 'dva';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import InjectExample from './InjectExample';


function IndexPage() {
  return (
    <div>
      <div>
        <h2>图标字体显示</h2>
        <Button type="primary"><Icon type="home" /> Button</Button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <h2>文字显示</h2>
        <div style={{ margin: 20 }}>
          <div style={{ margin: 10 }}>
            <FormattedMessage id="App.datePicker.title" />:{'  '}
            <DatePicker />
          </div>
          <div style={{ margin: 10 }}>
            <Pagination showQuickJumper defaultCurrent={2} total={500} />
          </div>
          <div style={{ margin: 10 }}>
            <InjectExample />
          </div>
        </div>
      </div>

    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
