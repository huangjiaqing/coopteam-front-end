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

  closeSelf = (org) => {
    setTimeout(() => {
      this.props.getValue(org);
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
    this.props.getValue(data[0]);
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
                  data: item,
                  onSelect: this.closeSelf,
                  selected: selected === item.orgId
                });
              })}
            </ul>
            <div className={styles.addOrg}>
              <span>
                <Icon
                  type="plus"
                  className={className(styles.addIcon, 'can-click')}
                />
              </span>
              <span>创建企业</span>
            </div>
          </div>
        }
      >
        {children}
      </Popover>
    );
  }

  renderOrgItem = ({data, selected=false, onSelect}) => (
    <li
      key={data.orgId}
      onClick={() => onSelect(data)}
      className={className(
        styles.orgItem,
        selected ? styles.selectItem : '',
        'can-click')}>
      <span>
        {selected && (
          <span>
            <Icon
              type='check'
              className={styles.selectIcon}
            /> 
          </span>
        )}
      </span>
      <span>{data.name}</span>
    </li>
  )
}