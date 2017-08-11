import React from 'react';
import { connect } from 'dva';

import { Icon, Button } from 'antd';

function IndexPage() {
  return (
    <Button type="primary"><Icon type="home" /> Button</Button>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
