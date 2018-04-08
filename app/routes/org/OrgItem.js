import React from 'react';
import PropTypes from 'prop-types';
import styles from './orgItem.css';
import className from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const OrgItem = ({ data={}, openEdit }) => {
  const { name, stared, projectId } = data;

  return (
    <Link
      to={`/project/${projectId}`}
      className={styles.projItem}>
      <div className={styles.projInfo}>
        <h2>{name}</h2>
        <div className={styles.action}>
          <Icon
            type="edit"
            className={className(styles.projIcon, styles.iconEdit)}
            onClick={openEdit}
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
};

OrgItem.propTypes = {
  data: PropTypes.object,
  openEdit: PropTypes.func,
};

export default OrgItem;