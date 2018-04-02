import React, { Component } from 'react';
import styles from './index.css';
import Layout from 'components/layout';
import className from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

export default class Org extends Component {

  edit = (e) => {
    e.preventDefault();
    console.log('点击了编辑');
  }

  star = (e) => {
    e.preventDefault();
    console.log('点击了star');
  }

  render() {
    return (
      <Layout>
        <div className={styles.org}>
          <div className={styles.center}>
            <section>
              <h2>星标项目</h2>
              <div className={styles.projGroup}>
                {this.renderOrgItem({name: '立白悦协作', stared: true})}
                {this.renderOrgItem({name: '北控项目面板', stared: true})}
              </div>
            </section>
            <section>
              <h2>企业项目</h2>
              <div className={styles.projGroup}>
                {this.renderOrgItem({name: '立白悦协作', stared: true})}
                {this.renderOrgItem({name: '北控项目面板', stared: true})}
                {this.renderOrgItem({name: '固定资产系统'})}
                {this.renderOrgItem({name: '黄嘉庆的项目'})}
                {this.renderOrgItem({name: '天明的项目'})}
                {this.renderOrgItem({name: '梁爽的项目'})}
              </div>
            </section>
            <section>
              <h2>项目回收站</h2>
              <div className={styles.projGroup}>
                {this.renderOrgItem({name: '大招科技'})}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }

  renderOrgItem({ name, stared }) {

    return (
      <Link to="/project" className={styles.projItem}>
        <div className={styles.projInfo}>
          <h2>{name}</h2>
          <div className={styles.action}>
            <Icon
              type="edit"
              className={className(styles.projIcon, styles.iconEdit)}
              onClick={this.edit}
            />
            <Icon
              type="star"
              className={className(styles.projIcon, styles.iconStar, stared ? styles.stared : '')}
              onClick={this.star}            
            />
          </div>
        </div>
      </Link>
    );
  }
}