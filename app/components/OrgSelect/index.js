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

const OrgSelect = ({ data, children }) => {
  console.log('data: ', data);

  return (
    <Popover
      trigger='click'
      placement='bottom'
      content={
        <div className={styles.orgSelect}>
          <ul>
            {data.map(item => (
              <OrgItem
                name={item.name}
                key={item.orgId}
              />
            ))}
            <OrgItem
              name='百度技术团队'
              selected
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
};

export default OrgSelect;