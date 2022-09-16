import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import styles from './index.module.scss';

const Comp = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col className="text-center">
          <div className="placeholder-20" />
          <div className="placeholder-20" />
          <div className="placeholder-20" />
          <h1 className={styles.title}>{t('title')}</h1>
          <div className="placeholder-10" />
          <div className="placeholder-20" />
          <h2 className={styles.subtitle}>{t('subtitle')}</h2>
        </Col>
      </Row>
    </>
  );
};

export default Comp;
