import React from 'react';
import styles from './stage.css';
import className from 'classnames';
import { Icon } from 'antd';

export default function Stage({ stageName, create, children }) {

  return (
    <div className={className(styles.stage, create ? styles.create : '')}>
      {
        create
          ? (
            <div className={className(styles.createStage, 'can-click')}>
              <Icon type="plus" className={styles.createIcon}/>
              <span>新建任务列表 ...</span>
            </div>
          )
          : [
            <h2 className={styles.title} key="title">{stageName} · 1</h2>,
            <div
              className={styles.tasks}
              key="list"
            >
              <div className={styles.list}>
                {children}
              </div>
              <div className={styles.addTask} key="add">
                
              </div>
            </div>
          ]
      }
    </div>
  );
}