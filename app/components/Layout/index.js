import React from 'react';
import styles from './index.css';
import Header from './Header';
import { Layout } from 'antd';

export default function Main({ children }) {

  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
    </Layout>
  );
}