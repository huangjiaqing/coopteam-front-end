import React, { Component } from 'react';
import className from 'classnames';
import styles from './index.css';
import { Modal, Icon } from 'antd';

const opts = [
  {
    tab: 1,
    name: '项目信息',
    icon: 'book',
  },
  {
    tab: 2,
    name: '任务权限',
    icon: 'file-text',
  },
  {
    tab: 3,
    name: '更多',
    icon: 'ellipsis',
  }
];

export default class ProjectSet extends Component {

  state = {
    tabFocus: 1
  }

  onTabChange(tabFocus) {
    this.setState({tabFocus});
  }

  render() {

    return (
      <Modal
        visible
        width={800}
        title={<h2 className={styles.title}>项目设置</h2>}
        footer={null}
        bodyStyle={{ padding: 0 }}
      >
        <div className={styles.body}>
          {this.renderLeft()}
          {this.renderRight()}
        </div>
      </Modal>
    );
  }

  renderLeft() {

    return (
      <ul className={styles.left}>
        {opts.map((item, idx) => {
          return this.renderOpt(item);
        })}
      </ul>
    );
  }

  renderOpt(opt) {
    const { tab, name, icon } = opt;
    const { tabFocus } = this.state;

    return (
      <li
        className={className(
          styles.opt,
          tab === tabFocus ? styles.selected : '',
          'can-click'
        )}
        key={tab}
        onClick={() => this.onTabChange(tab)}
      >
        <span><Icon type={icon} /></span>
        <span>{name}</span>
      </li>
    );
  }

  renderRight() {

    return (
      <div className={styles.right}></div>
    );
  }
}