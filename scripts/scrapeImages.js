"use strict";

const _ = require('lodash');
const fs = require('fs');
const dirname = './../dist/img/projects/';
const projects = [];

fs.readdir(dirname, (err, files) => {
  files = files.filter(file => file.includes('.jpg'));
  if (err) return console.error(err);

  files.forEach(file => {
    projects.push({
      img: `dist/img/projects/${file}`,
      title: _humanize(file.replace('.jpg', '')),
      description: ""
    });
  });

  console.log(JSON.stringify(projects, null, 2));

});


function _humanize(value) {
  return _.kebabCase(value).split('-').map(seg => seg.charAt(0).toUpperCase() + seg.slice(1)).join(' ');
}

/*
{
  "img": "http://placebear.com/950/950",
  "title": "Placeholder",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
*/
