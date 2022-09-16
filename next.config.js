const supportedLocales = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '中文(繁體)',
    value: 'zh-TW',
  },
];

module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    if (isServer) {
      const { createSitemap } = require('./src/sitemap');
      createSitemap({ locales: supportedLocales });
    }

    return config;
  },
  async headers() {
    return [
      {
        source: '/apple-app-site-association',
        headers: [
          {
            key: 'content-type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
  i18n: {
    locales: supportedLocales.map((lc) => lc.value),
    defaultLocale: supportedLocales[0].value,
  },
  images: {
    domains: ['picsum.photos'],
  },
};
