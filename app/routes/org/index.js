import React, { Component } from 'react';
import styles from './index.css';
import Layout from 'components/layout';
import OrgItem from './OrgItem';

export default class Org extends Component {

  state = {
    data: {
      stared: [
        { name: '立白悦协作', stared: true },
        { name: '北控项目面板', straed: true },
      ],
      orgs: [
        { name: '立白悦协作', stared: true },
        { name: '北控项目面板', straed: true },
        { name: '固定资产' },
        { name: '黄嘉庆的项目' },
        { name: '天明的项目' },
        { name: '梁爽的项目' },
      ],
      bin: [
        { name: '大招科技' }
      ]
    }
  }

  render() {
    const data = this.state.data;

    return (
      <Layout>
        <div className={styles.org}>
          <div className={styles.center}>
            <section>
              <h2>星标项目</h2>
              <div className={styles.projGroup}>
                {data.stared.map((item, idx) => (
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
                {data.orgs.map((item, idx) => (
                  <OrgItem
                    key={idx}
                    name={item.name}
                    stared={item.stared}
                  />
                ))}
              </div>
            </section>
            <section>
              <h2>项目回收站</h2>
              <div className={styles.projGroup}>
                {data.bin.map((item, idx) => (
                  <OrgItem
                    key={idx}
                    name={item.name}
                    stared={item.stared}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}