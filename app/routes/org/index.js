import React, { Component } from 'react';
import styles from './index.css';
import OrgItem from './OrgItem';
import ProjectSet from 'components/projectSet';
import { observer, inject } from 'mobx-react';

import { _getOrgs } from 'services/orgApi';

@inject('OrgStore')
@observer
export default class Org extends Component {

  state = {
    isShowBin: false,
    isShowProjectSet: false,
  }

  onShowBin = () => {
    this.setState({
      isShowBin: !this.state.isShowBin
    });
  }

  onShowProjectSet(e, isShow=false) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isShowProjectSet: isShow
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

  componentDidMount() {
    _getOrgs();
  }

  render() {
    const { isShowBin, isShowProjectSet } = this.state;
    const { stared, orgs, bin } = this.getProjects();

    return (
      <div className={styles.org}>
        {isShowProjectSet && (
          <ProjectSet
            closeModal={(e) => this.onShowProjectSet(e, false)}
            visible={isShowProjectSet}
          />)}
        <div className={styles.center}>
          <section style={{ display: stared.length ? 'block' : 'none' }}>
            <h2>星标项目</h2>
            <div className={styles.projGroup}>
              {stared.map((item, idx) => this.renderProjectItem(idx, item))}
            </div>
          </section>
          <section>
            <h2>企业项目</h2>
            <div className={styles.projGroup}>
              {orgs.map((item, idx) => this.renderProjectItem(idx, item))}
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
                {bin.map((item, idx) => this.renderProjectItem(idx, item))}
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }

  renderProjectItem = (key, data) => {
    return (
      <OrgItem
        key={key}
        data={data}
        openEdit={(e) => this.onShowProjectSet(e, true, data)}
      />
    );
  }
}