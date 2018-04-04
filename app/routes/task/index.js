import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import CustomFields from './CustomFields';
import className from 'classnames';
import Members from 'components/members';
import { Modal, Icon, Checkbox, Avatar, DatePicker, Button } from 'antd';

const TaskMainInfo = () => (
  <div className={styles.taskMainInfo}>
    <div className={styles.content}>
      <Checkbox />
      <div className={styles.text}>
        北控清洁能源项目的对接
      </div>
    </div>
    <div className={styles.info}>
      <Members>
        <div className={className(styles.executor, 'can-click')}>
          <Avatar icon="user" size="small"/>
          <span>黄嘉庆</span>
        </div>
      </Members>
      <div className={styles.time}>
        <DatePicker placeholder="设置截止时间"/>
      </div>
    </div>
  </div>
);

const Involve = () => (
  <div className={styles.involve}>
    <h2>参与者</h2>
    <div className={styles.list}>
      <Avatar icon="user" size="small"/>
      <Members>
        <Icon
          type="plus-circle"
          style={{ fontSize: '2rem', color: '#1890ff' }}
          className="can-click"
        />
      </Members>
    </div>
  </div>
);

const Publish = () => (
  <div className={styles.publish}>
    <section className={styles.btn}>
      <div className={styles.action}>
        {/* <Icon type="upload" /> */}
      </div>
      <Button type="primary">
        发布
      </Button>
    </section>
  </div>
);

export default class Task extends Component {
  static propTypes = {
    visible: PropTypes.bool
  }

  render() {
    const { visible } = this.props;

    return (
      <Modal
        width={600}
        closable={false}
        footer={<Publish />}
        visible={visible}
        title={this.renderTitle()}
      >
        <TaskMainInfo />
        <CustomFields />
        <Involve />
      </Modal>
    );
  }

  renderTitle() {
    const { closeTaskDetail } = this.props;

    return (
      <div className={styles.title}>
        <div className={styles.info}>
          <span>立白悦协作</span>
          <span>·</span>
          <span>待处理</span>
        </div>
        <div className={styles.action}>
          <Icon type="close" onClick={closeTaskDetail}/>
        </div>
      </div>
    );
  }
}