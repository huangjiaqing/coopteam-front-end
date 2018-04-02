import React, { Component } from 'react';
import TaskDetail from 'routes/task';
import styles from './board.css';
import Scrum from './Scrum';
import Stage from './Stage';
import Task from './Task';

export default class Board extends Component {

  render() {

    return (
      <div className={styles.board}>
        <Scrum>
          <Stage stageName="待处理">
            <Task data={{ content: '北控清洁能源项目对接' }}/>
          </Stage>
          <Stage stageName="进行中" />
          <Stage stageName="测试中" />
          <Stage stageName="已测试" />
          <Stage stageName="已通过" />
          <Stage stageName="已完成" />
          <Stage create />
        </Scrum>
        <TaskDetail />
      </div>
    );
  }
}