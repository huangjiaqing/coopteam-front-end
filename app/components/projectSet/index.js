import React, { Component } from 'react';
import className from 'classnames';
import styles from './index.css';
import { Modal, Icon } from 'antd';

export default class ProjectSet extends Component {

  state = {
    tabFocus: 0
  }

  render() {

    return (
      <Modal
        // visible
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
        {this.renderOpt('项目信息', 'book', true)}
        {this.renderOpt('任务权限', 'file-text')}
        {this.renderOpt('更多', 'ellipsis')}
      </ul>
    );
  }

  renderOpt(content='', icon='book', selected=false) {
    return (
      <li className={className(
        styles.opt,
        selected ? styles.selected : '',
        'can-click'
      )}>
        <span><Icon type={icon} /></span>
        <span>{content}</span>
      </li>
    );
  }

  renderRight() {

    return (
      <div className={styles.right}></div>
    );
  }
}