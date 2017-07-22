import { connect } from 'dva';
import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import UsersComponent from '../components/Users/Users';
import styles from './Users.css';

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Users);
