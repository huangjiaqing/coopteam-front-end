import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './header.css';
import SelectProj from 'components/selectProj';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Header = ({ isOpenMenu, onMenuClick }) => (
  <div className={styles.header}>
    <section className={styles.nav}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to="/org">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <SelectProj>
            立白悦协作
          </SelectProj>
        </Breadcrumb.Item>
      </Breadcrumb>
    </section>
    <section className={styles.action}>
      <li className="can-click" onClick={() => onMenuClick(!isOpenMenu)}>
        <Icon type="menu-unfold" className={styles.actionIcon}/>
        <span>菜单</span>
      </li>
    </section>
  </div>
);

Header.propTypes = {
  isOpenMenu: PropTypes.bool,
  onMenuClick: PropTypes.func,
};

export default Header;