import React, { useMemo } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { supportedLocaleMap, supportedLocales } from '../../i18n';
import styles from './index.module.scss';

const Comp = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();
  const links = useMemo(() => {
    return (
      <>
        <Link href="/" passHref>
          <Nav.Link>{t('Home')}</Nav.Link>
        </Link>
      </>
    );
  }, [t, locale]);
  const matchedLocale = useMemo(() => {
    return supportedLocales.find((lc) => {
      if (lc.value === locale) {
        return true;
      }
      if ((lc.fallbackLng ?? []).indexOf(locale) >= 0) {
        return true;
      }
      return false;
    });
  }, [locale]);
  return (
    <Navbar expand="lg" collapseOnSelect className={styles.navbar}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-md-none" />
        <div className="d-none d-md-block">
          <Nav className="me-auto">{links}</Nav>
        </div>
        <DropdownButton
          variant="clear"
          title={matchedLocale.label}
          align="end"
          className={styles.dropdownBtn}
        >
          {supportedLocales
            .filter((lc) => lc.value !== 'ja')
            .map(({ value: lc }) => {
              return (
                <Link href={router.asPath} locale={lc} key={lc} passHref>
                  <Dropdown.Item href={router.asPath}>{supportedLocaleMap[lc]}</Dropdown.Item>
                </Link>
              );
            })}
        </DropdownButton>
      </Container>
      <Container className="d-md-none">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Comp;
