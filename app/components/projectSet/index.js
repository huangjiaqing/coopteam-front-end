import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './index.css';
import { Modal, Icon, Button, Input, Avatar } from 'antd';

const { TextArea } = Input;

const opts = [
  {
    tab: 1,
    name: '项目信息',
    icon: 'book',
  },
  {
    tab: 2,
    name: '更多',
    icon: 'ellipsis',
  }
];

export default class ProjectSet extends Component {

  static propTypes = {
    visible: PropTypes.bool,
    closeModal: PropTypes.func
  }

  state = {
    tabFocus: 1
  }

  onTabChange(tabFocus) {
    this.setState({tabFocus});
  }

  render() {
    const { visible, closeModal } = this.props;

    return (
      <Modal
        visible={visible}
        width={800}
        title={<h2 className={styles.title}>项目设置</h2>}
        footer={null}
        bodyStyle={{ padding: 0 }}
        onCancel={closeModal}
      >
        <div className={styles.body} onClick={e => e.stopPropagation()}>
          {this.renderLeft()}
          {this.renderRight()}
        </div>
      </Modal>
    );
  }

  renderLeft() {

    return (
      <ul className={styles.left}>
        {opts.map((item) => {
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
    const { tabFocus } = this.state;

    return (
      <div className={styles.right}>
        {tabFocus === 1 && this.renderInfo()}
        {tabFocus === 2 && this.renderMore()}
      </div>
    );
  }

  renderInfo() {
    return [
      <div className={styles.info} key="input">
        {this.renderRightItem('项目封面', (
          <div className={styles.cover}>
            <div className={styles.img} />
            <Button>上传新封面</Button>
          </div>))}
        {this.renderRightItem('项目名称', (
          <div>
            <Input placeholder="请输入项目名称" />
          </div>))}
        {this.renderRightItem('项目简介', (
          <div>
            <TextArea rows={3} placeholder="请输入项目简介" />
          </div>))}
        {this.renderRightItem('项目拥有者', (
          <div className={styles.projectOwner}>
            <div className={styles.owner}>
              <span><Avatar icon="user" size="small" /></span>
              <span>黄嘉庆</span>
            </div>
            <div>
              <Button>移交</Button>
            </div>
          </div>))}
      </div>,
      <div className={styles.infoSave} key="save">
        <Button type="primary" disabled>保存</Button>
      </div>
    ];
  }

  renderMore() {
    return (
      <div className={styles.more}>
        {this.renderRightItem('项目操作', (
          <div className={styles.operation}>
            <span>你可以执行以下操作</span>
            <span>
              <Button
                style={{
                  backgroundColor: '#ff4f3e',
                  borderColor: '#ff4f3e',
                  color: '#fff'
                }}>
                移动到回收站
              </Button>
            </span>
          </div>
        ))}
      </div>
    );
  }

  renderRightItem(name='', children=null) {
    return (
      <section className={styles.infoItem}>
        <h2>{name}</h2>
        <div>{children}</div>
      </section>
    );
  }
}