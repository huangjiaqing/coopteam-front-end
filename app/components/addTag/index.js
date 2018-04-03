import React, { Component } from 'react';
import styles from './index.css';
import className from 'classnames';
import { Input, Popover, Button, Icon } from 'antd';

const colorMap = [
  {
    name: 'blue',
    bgcolor: 'rgb(61, 168, 245)',
    isSelect: true
  },
  {
    name: 'green',
    bgcolor: 'rgb(117, 201, 64)',
    isSelect: false
  },
  {
    name: 'cyan',
    bgcolor: 'rgb(47, 189, 179)',
    isSelect: false
  },
  {
    name: 'purple',
    bgcolor: 'rgb(121, 126, 201)',
    isSelect: false
  },
  {
    name: 'yellow',
    bgcolor: 'rgb(255, 175, 56)',
    isSelect: false
  },
  {
    name: 'red',
    bgcolor: 'rgb(255, 79, 62)',
    isSelect: false
  }
];

export default class AddTag extends Component {

  static propTypes = {
    
  }

  state = {
    isShowSelf: true,
    tabFocus: 'search',         // search | edit
  }

  tabChange(tabFocus) {
    this.setState({tabFocus});
  }

  closeSelf = () => {
    setTimeout(() => {
      this.setState({
        isShowSelf: false
      }, () => this.setState({
        isShowSelf: true
      }));
    }, 100);
  }

  render() {
    const { isShowSelf } = this.state;
    const visible = isShowSelf ? {} : { visible: false };

    return (
      <Popover
        {...visible}
        trigger="click"
        placement="bottom"
        content={this.renderContent()}
      >
        {this.renderTags()}
      </Popover>
    );
  }

  renderTags() {

    return (
      <div className={styles.addTagBtn}>
        添加标签
      </div>
    );
  }

  renderContent() {
    
    return (
      <div className={styles.addTag}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }

  renderHeader() {
    const { tabFocus } = this.state;
    return (
      <div className={styles.header}>
        {tabFocus === 'search' && [
          <div className={styles.search} key={0}>
            <input placeholder="搜索标签" />
          </div>,
          <div className={styles.add} key={1}>
            <Icon
              type="plus-circle-o"
              style={{ color: '#1890ff' }}
              onClick={() => this.tabChange('edit')}
            />
          </div>]}
        {tabFocus === 'edit' && [
          <div className={styles.back} key={0}>
            <Icon
              type="left"
              onClick={() => this.tabChange('search')}
            />
          </div>,
          <div className={styles.title} key={1}>
            新建标签
          </div>,
          <div className={styles.close} key={2}>
            <Icon
              type="close"
              onClick={this.closeSelf}
            />
          </div>]}
      </div>
    );
  }

  renderBody() {
    const { tabFocus } = this.state;

    return (
      <div className={styles.body}>
        {tabFocus === 'search' && this.renderTagOpt()}
        {tabFocus === 'edit' && this.renderCreateTag()}
        {/* <p>该项目暂无标签</p> */}
        {/* {this.renderTagOpt()} */}
      </div>
    );
  }

  renderTagOpt() {
    
    return (
      <li className={styles.tagOpt}>
        <div className={styles.info}>
          <span className={styles.tagColor}/>
          <span>该任务需要加油</span>
        </div>
        <div className={styles.action}>
          <Icon
            type="edit" style={{ marginRight: 10 }}
            onClick={() => this.tabChange('edit')}
          />
          <Icon type="close-circle-o" />
        </div>
      </li>
    );
  }

  renderCreateTag() {

    return (
      <div className={styles.createTag}>
        <section>
          <Input
            placeholder="标签名称"
          />
        </section>
        <section>
          {colorMap.map((item, idx) => (
            <span
              key={idx}
              style={{backgroundColor: item.bgcolor}}
              className={className(styles.colorItem, 'can-click')}
            >
              {item.isSelect && <Icon type="check" className={styles.icon}/>}
            </span>
          ))}
        </section>
        <section>
          <Button
            type="primary"
            disabled={false}
            style={{width: '100%'}}
          >
            保存标签
          </Button>
        </section>
      </div>
    );
  }
}