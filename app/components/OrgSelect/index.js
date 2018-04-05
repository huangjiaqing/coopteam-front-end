import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import className from 'classnames';
import { Popover, Icon } from 'antd';

export default class OrgSelect extends PureComponent {

  static propTypes = {
    data: PropTypes.array,
    selected: PropTypes.string,
    getValue: PropTypes.func,
    children: PropTypes.any
  }

  state = {
    isShowSelf: true
  }

  closeSelf = (orgId) => {
    setTimeout(() => {
      this.props.getValue(orgId);
      this.setState({
        isShowSelf: false 
      }, () => {
        this.setState({
          isShowSelf: true
        });
      });
    }, 100);
  }

  componentDidMount() {
    const { data } = this.props;
    this.props.getValue(data[0].orgId);
  }

  render() {
    const { data, children, selected } = this.props;
    const { isShowSelf } = this.state;
    const visible = isShowSelf ? {} : { visible: false };

    return (
      <Popover
        {...visible}
        trigger='click'
        placement='bottom'
        content={
          <div className={styles.orgSelect}>
            <ul>
              {data.map(item => {
                return this.renderOrgItem({
                  name: item.name,
                  orgId: item.orgId,
                  onSelect: this.closeSelf,
                  selected: selected === item.orgId
                });
              })}
            </ul>
            <div className={styles.addOrg}>
              <Icon type="plus" className={styles.addIcon}/>
              <span>创建企业</span>
            </div>
          </div>
        }
      >
        {children}
      </Popover>
    );
  }

  renderOrgItem = ({name, selected=false, orgId=1, onSelect}) => (
    <li
      key={orgId}
      onClick={() => onSelect(orgId)}
      className={className(
        styles.orgItem,
        selected ? styles.selectItem : '',
        'can-click')}>
      <span>
        {selected && (
          <Icon
            type='check'
            className={styles.selectIcon}
          />)}
      </span>
      <span>{name}</span>
    </li>
  )
}