const path = require('path');
const fs = require('fs');

const { VM } = require('vm2');

/**
 * @param wxmlPath {string} path passed to wcc
 */
function evalWxmlJs(jsPath, wxmlPath, data) {
  const f = fs.readFileSync(jsPath, { encoding: 'utf-8' });
  const values = [];
  const sandbox = {
    window: {},
    __sandbox__file: wxmlPath,
    __sandbox__input: data,
    __sandbox__emit: (...v) => values.push(v),
    console: console,
  };

  const vm = new VM({
    timeout: 1000,
    sandbox: sandbox,
  });

  const ret = vm.run(f + '\n ; __sandbox__emit($gwx(__sandbox__file)(__sandbox__input));');

  return values[0];
}

function main() {
  const wxml = 'page1.wxml';
  const js = path.resolve(__dirname, 'page1.wxml.js');
  const res = evalWxmlJs(js, wxml, { cond1: true } );

  console.log(JSON.stringify(res, null, 2));
}

main();
