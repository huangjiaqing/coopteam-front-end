import React from 'react';
import styles from './index.css';
import className from 'classnames';
import { Popover, Icon } from 'antd';

const OrgItem = ({ name, selected }) => (
  <li
    className={className(
      styles.orgItem,
      selected ? styles.selectItem : '',
      'can-click')}
  >
    <span>
      {selected && (
        <Icon
          type='check'
          className={styles.selectIcon}
        />)}
    </span>
    <span>{name}</span>
  </li>
);

export default function OrgSelect({ children }) {

  return (
    <Popover
      trigger='click'
      placement='bottom'
      content={
        <div className={styles.orgSelect}>
          <ul>
            <OrgItem
              name='油车文化'
              selected
            />
            <OrgItem
              name='百度技术团队'
            />
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