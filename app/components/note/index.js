import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './index.css';
import { Tooltip, Input, Button } from 'antd';

export default class Note extends Component {

  static propTypes = {
    getValue: PropTypes.func
  }

  state = {
    isOpenNoteEditor: false,
    note: '',
    noteCache: ''
  }

  getNoteCache = (e) => {
    this.setState({
      noteCache: e.target.value
    });
  }

  openNoteEditor = (e) => {
    this.setState({
      isOpenNoteEditor: true
    });
  }

  closeNoteEditor = (e) => {
    this.setState({
      isOpenNoteEditor: false
    });
  }

  onSave() {
    this.setState({
      note: this.state.noteCache,
      isOpenNoteEditor: false
    }, () => {
      const { getValue } = this.props;
      getValue && getValue(this.state.note);
    });
  }

  render() {
    const { isOpenNoteEditor, note, noteCache } = this.state;

    return (
      <div className={styles.note}>
        {isOpenNoteEditor
          ? [
            <Input.TextArea
              key="input"
              rows={6}
              onChange={this.getNoteCache}
              style={{fontSize: '1.1rem'}}
              value={noteCache}
            />,
            <div className={styles.btn} key="action">
              <Button
                style={{border: 'none'}}
                onClick={this.closeNoteEditor}
              >
                取消
              </Button>&nbsp;&nbsp;
              <Button
                type="primary"
                onClick={() => this.onSave()}
              >
                保存
              </Button>
            </div>
          ]
          : (
            <Tooltip title="点击可编辑">
              <span
                className={className(styles.add, 'can-click')}
                onClick={this.openNoteEditor}
              >
                {note.length ? note : '待添加'}
              </span>
            </Tooltip>
          )
        }
      </div>
    );
  }
}