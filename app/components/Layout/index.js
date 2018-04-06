import React from 'react';
import styles from './index.css';
import Header from './Header';
import { Layout } from 'antd';

export default function Main(props) {
  const { children } = props;

  return (
    <Layout style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <div className={styles.main}>
        {children}
      </div>
    </Layout>
  );
}