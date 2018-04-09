import React, { Component } from 'react';
import styles from './header.css';
import className from 'classnames';
import OrgSelect from 'components/orgSelect';
import PopoverClose from 'components/popoverClose';
import { Popover, Layout, Icon, Avatar, Input } from 'antd';
import { observer, inject } from 'mobx-react';

const { Header } = Layout;
const { Search } = Input;

@PopoverClose
class MySet extends Component {

  render() {
    const { visible, children } = this.props;

    return (
      <Popover
        {...visible}
        content={this.renderContent()}
        trigger='click'
        placement='bottom'
      >
        {children}
      </Popover>
    );
  }

  handleClick = () => {
    this.props.closePopover();
  }

  renderContent() {
    return (
      <ul className={styles.mySet} onClick={this.handleClick}>
        <li className="can-click">账号设置</li>
        <li className="can-click">退出登录</li>
      </ul>
    );
  }
}

@PopoverClose
class Add extends Component {

  handleClick = () => {
    this.props.closePopover();
  }

  render() {
    const { visible, children } = this.props;

    return (
      <Popover
        {...visible}
        content={this.renderContent()}
        trigger='click'
        placement='bottom'
      >
        {children}
      </Popover>
    );
  }

  renderContent() {
    return (
      <ul className={styles.add} onClick={this.handleClick}>
        <li className="can-click">
          <span><Icon type="appstore-o" /></span>
          <span>项目</span>
        </li>
        <li className="can-click">
          <span><Icon type="profile" /></span>
          <span>任务</span>
        </li>
      </ul>
    );
  }
}

@inject('OrgStore')
@observer
export default class extends Component {

  state = {
    currentOrg: null
  }

  /**
   * 获取组织
   * @param {*string} orgId 
   */
  getOrg(currentOrg) {
    this.setState({
      currentOrg
    }, () => {
      this
        .props
        .OrgStore
        .getProjects(currentOrg.orgId);
    });
  }

  componentDidMount() {
    this.props.OrgStore.getOrgs();
  }

  render() {
    const { currentOrg } = this.state;
    const orgs = Array.from(this.props.OrgStore.orgs);

    return (
      <Header
        style={{
          width: '100%',
          backgroundColor: '#fff',
          height: '48px',
          boxShadow: '0 1px 3px 0 rgba(0,0,0,.15)',
          padding: '0'
        }}>
        {orgs.length && (
          <div className={styles.header}>
            <div className={styles.org}>
              <span className={styles.orgIcon}>
                <OrgSelect
                  data={orgs}
                  getValue={(org) => this.getOrg(org)}
                  selected={currentOrg && currentOrg.orgId}>
                  <Icon
                    type="bars"
                    className="can-click"
                  />
                </OrgSelect>
              </span>
              <h2>
                {currentOrg && currentOrg.name}
              </h2>
            </div>
            <section className={styles.search}>
              <Search
                placeholder="在个人项目中搜索"
                onSearch={value => console.log(value)}
                style={{ width: 240 }}
              />
              <Add>
                <Icon
                  type="plus-circle"
                  className={className(styles.addTask, 'can-click')}
                />
              </Add>
            </section>
            <section className={styles.me}>
              <MySet>
                <Avatar
                  icon="user"
                  src="https://i.loli.net/2018/03/25/5ab6f20c79726.jpg"
                  size="small"
                  className="can-click"
                />
              </MySet>
            </section>
          </div>
        )}
      </Header>
    );
  }
}

