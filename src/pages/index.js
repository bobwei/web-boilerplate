import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import styles from './index.module.scss';
import Navbar from '../components/Navbar';
import HeroInfo from '../components/HeroInfo';

const Comp = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Container>
        <HeroInfo />
        <Row className="d-block d-sm-none">
          <Col xs={{ span: 8, offset: 2 }}>
            <div className="d-grid gap-2">
              <Link href="/web" passHref>
                <Button variant="outline-primary" size="lg">
                  {t('Start')}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="placeholder-20" />
        <>
          <div className="placeholder-20" />
          <div className="placeholder-20" />
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center flex-column d-lg-none"
              md={{ span: 6 }}
            >
              <h2 className={styles.featureTitle}>{t('feature1 title 2')}</h2>
              <div className="placeholder-20" />
              <div className="placeholder-20" />
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center flex-column"
              md={{ span: 6 }}
            >
              <Image
                src="https://picsum.photos/300/649"
                alt={t('feature1 title 2')}
                width={300}
                height={649}
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center flex-column d-none d-lg-flex"
              md={{ span: 6 }}
            >
              <h2 className={styles.featureTitle}>{t('feature1 title 2')}</h2>
              <div className="placeholder-20" />
              <div className="placeholder-20" />
            </Col>
          </Row>
          <div className="placeholder-20" />
          <div className="placeholder-20" />
        </>
        <>
          <div className="placeholder-20" />
          <div className="placeholder-20" />
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center flex-column"
              md={{ span: 6 }}
            >
              <h2 className={styles.featureTitle}>{t('feature2 title 2')}</h2>
              <div className="placeholder-20" />
              <div className="placeholder-20" />
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center flex-column"
              md={{ span: 6 }}
            >
              <Image
                src="https://picsum.photos/300/649"
                alt={t('feature2 title 2')}
                width={300}
                height={649}
              />
            </Col>
          </Row>
          <div className="placeholder-20" />
          <div className="placeholder-20" />
        </>
      </Container>
    </>
  );
};

export default Comp;
