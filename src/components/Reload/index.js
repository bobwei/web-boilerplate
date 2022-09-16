import React, { useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import axios from 'axios';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Link from 'next/link';

const Comp = ({ isHomeHidden = false }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const onReload = useCallback(() => {
    NProgress.start();
    return axios
      .get('/api/revalidate', {
        params: {
          paths: `/${router.locale}${router.asPath}`,
        },
      })
      .then(() => {
        document.documentElement.scrollTop = 0;
        return new Promise((resolve) => setTimeout(resolve, 100));
      })
      .then(() => {
        router.reload();
      })
      .catch(console.log)
      .finally(() => {
        NProgress.done();
      });
  }, [router]);
  return (
    <>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="d-grid gap-2">
            <Button variant="light" onClick={onReload}>
              {t('Reload')}
            </Button>
          </div>
        </Col>
      </Row>
      {!isHomeHidden && (
        <>
          <div className="placeholder-10" />
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <div className="d-grid gap-2">
                <Link href="/" passHref>
                  <Button variant="light">{t('Home')}</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </>
      )}
      <div className="placeholder-20" />
      <div className="placeholder-20" />
    </>
  );
};

export default Comp;
