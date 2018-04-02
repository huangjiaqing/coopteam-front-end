import React from 'react';
import styles from './index.css';
import Header from './Header';
import { Layout } from 'antd';

export default function Main() {

  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
    </Layout>
  );
}