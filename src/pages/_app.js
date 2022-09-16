import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { DefaultSeo } from 'next-seo';

import '../styles/index.scss';
import configI18n from '../i18n';
import { seoConfig } from '../constants';

const Comp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;
  const i18nRef = useRef(null);
  if (!i18nRef.current) {
    i18nRef.current = configI18n({ lng: locale });
  }
  useEffect(() => {
    i18nRef.current.changeLanguage(locale);
  }, [locale]);
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <meta name="apple-mobile-web-app-title" content=""></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </Head>
      <SSRProvider>
        <DefaultSeo {...seoConfig({ t, locale })} />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
};

export default Comp;
