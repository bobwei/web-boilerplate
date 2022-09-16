import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLocales = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '中文(繁體)',
    value: 'zh-TW',
  },
];

export const allLocales = supportedLocales
  .map((locale) => {
    return locale.fallbackLng ?? [locale.value];
  })
  .map((locales) => {
    return locales.map((locale) => locale.toLowerCase());
  })
  .reduce((acc, cur) => [...acc, ...cur], []);

export const supportedLocaleMap = supportedLocales.reduce((acc, cur) => {
  acc[cur.value] = cur.label;
  return acc;
}, {});

const resources = supportedLocales.reduce((acc, cur) => {
  const [locale] = cur.value.split('-');
  acc[locale] = {
    translation: (() => {
      try {
        return require(`./langs/${locale}.json`);
      } catch (e) {
        return require(`./langs/${cur.value}.json`);
      }
    })(),
  };
  return acc;
}, {});

const configI18n = (props = {}) => {
  i18n.use(initReactI18next).init({
    fallbackLng: {
      default: ['en-US'],
    },
    resources,
    interpolation: {
      escapeValue: false,
    },
    ...props,
  });
  return i18n;
};

export default configI18n;
