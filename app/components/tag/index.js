import React from 'react';
import styles from './index.css';
import classNameComposes from 'classnames';
import { Tooltip, Icon } from 'antd';

const tagColorMap = {
  blue: {
    color: '#246493',
    backgroundColor: 'rgba(138,202,249,.8)'
  },
  green: {
    color: '#467826',
    backgroundColor: 'hsla(97,55%,71%,.8)'
  },
  red: {
    color: '#992f25',
    backgroundColor: 'hsla(5,100%,77%,.8)'
  },
  cyan: {
    color: '#1c716b',
    backgroundColor: 'rgba(130,215,209,.8)'
  },
  purple: {
    color: '#484b78',
    backgroundColor: 'rgba(174,177,222,.8)'
  },
  yellow: {
    color: '#996921',
    backgroundColor: 'rgba(255,207,135,.8)'
  }
};

const Tag = ({
  className='',
  content,
  removeFunc,
  color,
  style={}
}) => {
  style = color
    ? {...tagColorMap[color], ...style}
    : {...tagColorMap.blue, ...style};
  
  return (
    <Tooltip title={content} mouseEnterDelay={0.4}>
      <div
        className={classNameComposes(styles.tag, className)}
        style={style}
      >
        <span className={styles.content}>{content}</span>
        {/* {removeFunc && ( */}
        <span className={styles.remove}>
          <Icon
            type="close-circle"
            className={'can-click'}
            onClick={removeFunc}
          />
        </span>
        {/* )} */}
      </div>
    </Tooltip>
  );
};

Tag.propTypes = {

};

export default Tag;
