import React from 'react';
import styles from './orgItem.css';
import className from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const OrgItem = ({ name, stared }) => (
  <Link to="/project" className={styles.projItem}>
    <div className={styles.projInfo}>
      <h2>{name}</h2>
      <div className={styles.action}>
        <Icon
          type="edit"
          className={className(styles.projIcon, styles.iconEdit)}
          // onClick={this.edit}
        />
        <Icon
          type="star"
          className={className(styles.projIcon, styles.iconStar, stared ? styles.stared : '')}
          // onClick={this.star}            
        />
      </div>
    </div>
  </Link>
);

export default OrgItem;