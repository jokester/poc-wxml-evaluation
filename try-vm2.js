const path = require('path');
const fs = require('fs');

const { VM } = require('vm2');

function main() {
  const f = fs.readFileSync(path.resolve(__dirname, 'pages-index.js'), { encoding: 'utf-8' });
  // console.log(f);
  const values = [];
  const sandbox = { window: {}, __sandbox__emit: (...v) => values.push(v), };
  const vm = new VM({
    timeout: 1000,
    sandbox: sandbox,
  });

  const ret = vm.run(f + '\n ; __sandbox__emit($gwx("hey.wxml"), 2);');
  console.log(sandbox);
  console.log(values);
}

main();
