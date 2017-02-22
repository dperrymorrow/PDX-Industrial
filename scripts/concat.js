'use strict';


const fs = require('fs');
let output = '';
const files = [
  "_source/js/app.js",
  "node_modules/vanilla-lazyload/dist/lazyload.min.js"
];

files.forEach(file => {
  console.log(process.cwd() + '/' + file)
  output += fs.readFileSync(process.cwd() + '/' + file).toString() + '\n';
});

fs.writeFileSync(`${process.cwd()}/dist/js/app.min.js`, output)
