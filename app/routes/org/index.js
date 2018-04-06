import React, { Component } from 'react';
import styles from './index.css';
import OrgItem from './OrgItem';
import { observer, inject } from 'mobx-react';

@inject('OrgStore')
@observer
export default class Org extends Component {

  state = {
    isShowBin: false
  }

  onShowBin = () => {
    this.setState({
      isShowBin: !this.state.isShowBin
    });
  }

  getProjects() {
    const projects = Array.from(this.props.OrgStore.projects);

    return {
      stared: projects.filter(item => item.stared),
      orgs: projects.filter(item => !item.isInBin),
      bin: projects.filter(item => item.isInBin),
    };
  }

  render() {
    const { isShowBin } = this.state;
    const projects = this.getProjects();

    return (
      <div className={styles.org}>
        <div className={styles.center}>
          <section style={{ display: projects.stared.length ? 'block' : 'none' }}>
            <h2>星标项目</h2>
            <div className={styles.projGroup}>
              {projects.stared.map((item, idx) => (
                <OrgItem
                  key={idx}
                  name={item.name}
                  stared={item.stared}
                />
              ))}
            </div>
          </section>
          <section>
            <h2>企业项目</h2>
            <div className={styles.projGroup}>
              {projects.orgs.map((item, idx) => (
                <OrgItem
                  key={idx}
                  name={item.name}
                  stared={item.stared}
                />
              ))}
            </div>
          </section>
          <section>
            <h2>
              <span>项目回收站</span>
              <span
                className="can-click"
                onClick={this.onShowBin}
              >
                {isShowBin ? '隐藏' : '显示'}
              </span>
            </h2>
            {isShowBin && (
              <div className={styles.projGroup}>
                {projects.bin.map((item, idx) => (
                  <OrgItem
                    key={idx}
                    name={item.name}
                    stared={item.stared}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
}