
'use strict';

const ejs = require('ejs');
const fs = require('fs');
const locals = require('./../_source/data.json');
const opts = {
  persistant: true,
  interval: 1000,
};

fs.watch('./../_source/ejs', opts, (ev, fileName) => {
  console.log(`${fileName} changed`);
  render();
});

function render() {
  ejs.renderFile('./../_source/ejs/index.ejs', locals, {}, (err, str) => {
    if (err) throw err;

    fs.writeFile('./../index.html', str, err => {
      if (err) throw err;
    });
  });
}

render();
//
// const locals = require('./../_source/data.json');
//
// ejs.renderFile('./../_source/ejs/index.ejs', locals, {}, function(err, str){
//   console.log(str)
//       fs.writeFile('./../../index.html', str, err => {
//         if (err) throw err;
//       });
//
// });
