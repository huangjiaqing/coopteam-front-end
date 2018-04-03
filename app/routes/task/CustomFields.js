import React, { Component } from 'react';
import styles from './customFields.css';
import Note from 'components/note';
import Priority from 'components/priority';
import { Icon } from 'antd';

const FieldItem = ({iconType, fieldName, children}) => {
  return (
    <li className={styles.item}>
      <div className={styles.left}>
        <Icon type={iconType} style={{ marginRight: 12 }}/>
        <span>{fieldName}</span>
      </div>
      <div className={styles.right}>
        {children}
      </div>
    </li>
  );
};

export default class CustomFields extends Component {

  render() {

    return (
      <ul className={styles.customFields}>
        <FieldItem iconType="file-text" fieldName="备注">
          <Note />
        </FieldItem>
        <FieldItem iconType="exclamation-circle-o" fieldName="优先级">
          <Priority
            getValue={() => 1}
            btnStyle={{ position: 'relative', top: -2 }}
          />
        </FieldItem>
        <FieldItem iconType="tag-o" fieldName="标签"></FieldItem>
      </ul>
    );
  }
}