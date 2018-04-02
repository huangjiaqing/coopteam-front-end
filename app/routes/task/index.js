import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import CustomFields from './CustomFields';
import { Modal, Icon } from 'antd';

export default class Task extends Component {
  static propTypes = {
    visible: PropTypes.bool
  }

  render() {
    
    return (
      <Modal
        visible
        width={600}
        title={this.renderTitle()}
        closable={false}
        footer={this.renderFooter()}
      >
        <div className={styles.task}>
          <CustomFields />
        </div>
      </Modal>
    );
  }

  renderTitle() {
    return (
      <div className={styles.title}>
        <div className={styles.info}>
          <span>立白悦协作</span>
          <span>·</span>
          <span>待处理</span>
        </div>
        <div className={styles.action}>
          <Icon type="close" />
        </div>
      </div>
    );
  }

  renderFooter() {

    return (
      <div className={styles.footer}>
        这是尾巴
      </div>
    );
  }
}