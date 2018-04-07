import React, { Component } from 'react';
import className from 'classnames';
import PopoverClose from 'components/popoverClose';
import styles from './index.css';
import { Popover, Icon, Input } from 'antd';

@PopoverClose
export default class SelectProj extends Component {

  handleClick = (e) => {
    this.props.closePopover();
  }

  render() {
    const { children, visible } = this.props;

    return (
      <Popover
        {...visible}
        trigger="click"
        placement="bottom"
        content={this.renderContent()}
      >
        <div className={className(styles.selectProjBtn, 'can-click')}>
          <span>{children}</span>
          <span><Icon type="down" /></span>
        </div>
      </Popover>
    );
  }

  renderContent() {
    return (
      <div className={styles.selectProj}>
        <div className={styles.search}>
          <Input placeholder="查找项目" />
        </div>
        <h2>
          所有项目
        </h2>
        <ul>
          {this.renderProjectItem(true)}
          {this.renderProjectItem()}
          {this.renderProjectItem()}
          {this.renderProjectItem()}
        </ul>
      </div>
    );
  }

  renderProjectItem(seleced=false) {

    return (
      <li
        onClick={this.handleClick}
        className={className(styles.projectItem, 'can-click')}>
        <div className={styles.itemImg}/>
        <h2>立白悦协作</h2>
        { seleced && <span><Icon type="check" /></span> }
      </li>
    );
  }
}