export const seoConfig = ({ locale, t }) => {
  return {
    title: t('og title'),
    defaultTitle: t('og title'),
    description: t('og description'),
    openGraph: {
      title: t('og title'),
      description: t('og description'),
      images: [
        {
          // prettier-ignore
          url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/images/${locale}/cover.jpg?t=${new Date().getTime()}`
        },
      ],
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/${locale}`,
      locale: locale.replace('-', '_'),
      type: 'website',
    },
    facebook: {
      appId: '',
    },
  };
};

export const allPagesPidMap = {
  'zh-tw': '',
  ja: '',
};
