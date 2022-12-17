import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = 'output';

export function exampleLog() {
  const some = {
    a1: 11,
    b2: 21,
    c3: 31,
  };

  console.log('❗path.resolve(__dirname, OUTPUT_DIR,)', path.resolve(__dirname, OUTPUT_DIR));

  if (!fs.existsSync(path.resolve(__dirname, OUTPUT_DIR))) {
    fs.mkdirSync(path.resolve(__dirname, OUTPUT_DIR));
  }

  /*todo: log*/ fs.writeFileSync(path.resolve(__dirname, OUTPUT_DIR,'testlog.json'), Object.entries({ some }).reduce((r, [k, v]) => `${r}var ${k} = ${JSON.stringify(v, null, 4)}\n`, ""), "utf-8"); // prettier-ignore

  console.log('❗', `${path.resolve(__dirname, OUTPUT_DIR, 'testlog.json')} is written`);

  return some;
}
