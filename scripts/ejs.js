
'use strict';

const ROOT = process.cwd();

const ejs = require('ejs');
const fs = require('fs');
const opts = {
  persistant: true,
  interval: 1000,
};

fs.watch(`${ROOT}/_source/ejs`, opts, render);
fs.watch(`${ROOT}/_source/data.json`, opts, render);

function render() {
  delete require.cache[`${ROOT}/_source/data.json`]
  const locals = require(`${ROOT}/_source/data.json`);
  ejs.renderFile(`${ROOT}/_source/ejs/index.ejs`, locals, {}, (err, str) => {
    if (err) throw err;

    fs.writeFile(`${ROOT}/index.html`, str, err => {
      if (err) throw err;
    });
  });

  ejs.renderFile(`${ROOT}/_source/ejs/about.ejs`, locals, {}, (err, str) => {
    if (err) throw err;

    fs.writeFile(`${ROOT}/about.html`, str, err => {
      if (err) throw err;
    });
  });
}

render();
