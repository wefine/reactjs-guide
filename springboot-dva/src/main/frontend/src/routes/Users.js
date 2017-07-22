import { connect } from 'dva';
import React from 'react';
import styles from './Users.css';

function Users() {
  return (
    <div className={styles.normal}>
      Route Component: Users
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
