import fs from 'fs';
import Papa from 'papaparse';

(async () => {
  const pathToLangs = 'src/i18n/langs';
  const pathToDist = 'dist';
  const content = fs.readFileSync(pathToDist + '/translation.csv', 'utf8');
  const result = Papa.parse(content);
  const csv = result.data;
  const [[, ...langs]] = csv;
  const output = langs.reduce((acc, cur) => {
    acc[cur] = {};
    return acc;
  }, {});
  for (let i = 1; i < csv.length; i++) {
    for (let j = 0; j < langs.length; j++) {
      const lang = langs[j];
      output[lang][csv[i][0]] = csv[i][j + 1];
    }
  }
  for (const lang in output) {
    const data = JSON.stringify(output[lang], null, 2);
    fs.writeFileSync(pathToLangs + '/' + lang + '.json', data + '\n');
  }
})();
