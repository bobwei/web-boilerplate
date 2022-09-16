module.exports.createSitemap = ({ locales = [] }) => {
  const fs = require('fs');
  const prettier = require('prettier');
  const lastmod = new Date().toISOString();

  const outputRoutes = [];
  const routes = [''];
  for (const { value: locale } of locales) {
    for (const route of routes) {
      const content = `<sitemap>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/${locale}${route}</loc>
        <lastmod>${lastmod}</lastmod>
      </sitemap>`;
      outputRoutes.push(content);
    }
  }

  const output = `
  <?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
    ${outputRoutes.join('\n')}
  </sitemapindex>`;
  fs.writeFileSync('public/sitemap.xml', prettier.format(output, { parser: 'html' }), 'utf8');
};
