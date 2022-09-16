import React from 'react';
import moment from 'moment';

import styles from './index.module.scss';

const Comp = ({ title, value }) => {
  return (
    <div>
      <strong className={styles.title}>{title}</strong>
      <time dateTime={moment(value).format()} className={styles.value}>
        {moment(value).format('YYYY-MM-DD')}
      </time>
    </div>
  );
};

export default Comp;
