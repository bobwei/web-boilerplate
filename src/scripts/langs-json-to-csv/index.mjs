import fs from 'fs';
import mkdirp from 'mkdirp';
import Papa from 'papaparse';

(async () => {
  const pathToLangs = 'src/i18n/langs';
  const pathToDist = 'dist';
  mkdirp.sync(pathToDist);
  const langs = fs.readdirSync(pathToLangs).map((str) => str.split('.json')[0]);
  const data = {};
  for (const lang of langs) {
    const translationJson = JSON.parse(fs.readFileSync(pathToLangs + '/' + lang + '.json', 'utf8'));
    for (const key in translationJson) {
      if (!(key in data)) {
        data[key] = [translationJson[key]];
      } else {
        data[key].push(translationJson[key]);
      }
    }
  }
  for (const key in data) {
    if (data[key].length < langs.length) {
      console.log(key);
    }
  }
  const rows = [['key', ...langs]];
  for (const key in data) {
    rows.push([key, ...data[key]]);
  }
  const output = Papa.unparse(rows);
  fs.writeFileSync(pathToDist + '/translation.csv', output);
})();
