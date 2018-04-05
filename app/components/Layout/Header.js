import React, { Component } from 'react';
import styles from './header.css';
import OrgSelect from 'components/orgSelect';
import className from 'classnames';
import { Layout, Icon, Avatar, Input } from 'antd';

const { Header } = Layout;
const { Search } = Input;

import { observer, inject } from 'mobx-react';

@inject('OrgStore')
@observer
export default class extends Component {

  state = {
    currentOrgId: undefined
  }

  /**
   * 获取组织
   * @param {*string} orgId 
   */
  getOrg(orgId) {
    this.setState({
      currentOrgId: orgId
    });
  }

  componentDidMount() {
    this.props.OrgStore.getList();
  }

  render() {
    const { currentOrgId } = this.state;
    const list = Array.from(this.props.OrgStore.list);

    return (
      <Header
        style={{
          width: '100%',
          backgroundColor: '#fff',
          height: '48px',
          boxShadow: '0 1px 3px 0 rgba(0,0,0,.15)',
          padding: '0'
        }}
      >
        {list.length && (
          <div className={styles.header}>
            <div className={styles.org}>
              <OrgSelect
                data={list}
                getValue={(orgId) => this.getOrg(orgId)}
                selected={currentOrgId}
              >
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
              <Search
                placeholder="在个人项目中搜索"
                onSearch={value => console.log(value)}
                style={{ width: 240 }}
              />
              <Icon type="plus-circle" className={styles.addTask}/>
            </section>
            <section className={styles.me}>
              <Avatar
                icon="user"
                src="https://i.loli.net/2018/03/25/5ab6f20c79726.jpg"
                size="small"
              />
            </section>
          </div>
        )}
      </Header>
    );
  }
}

