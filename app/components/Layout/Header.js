import React from 'react';
import styles from './header.css';
import OrgSelect from 'components/OrgSelect';
import className from 'classnames';
import { Layout, Icon, Avatar } from 'antd';

const { Header } = Layout;

export default function () {

  return (
    <Header
      style={{
        width: '100%',
        backgroundColor: '#fff',
        height: '48px',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,.15)'
      }}
    >
      <div className={styles.header}>
        <div className={styles.org}>
          <OrgSelect>
            <Icon
              type="bars"
              className={className(styles.orgIcon, 'can-click')}
            />
          </OrgSelect>
          <h2>
            油车文化
          </h2>
        </div>
        <section className={styles.search}>
        </section>
        <section className={styles.me}>
          <Avatar
            icon="user"
            src="https://i.loli.net/2018/03/25/5ab6f20c79726.jpg"
            size="small"
          />
        </section>
      </div>
    </Header>
  );
}

