// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

const fs = require('fs');
const bundle = 'auro-combobox__bundled.js';
const indexFile = './build/index.html';

// File destination.txt will be created or overwritten by default.
let copyFiles = async function() {
  fs.copyFile(`./dist/${bundle}`, `./build/${bundle}`, (err) => {
    if (err) throw err;
    console.log(`${bundle} was copied to ./build dir`);
  });
}

// Edit string in new index.html file
fs.readFile(indexFile, 'utf8', function (err,data) {
  copyFiles();

  if (err) {
    return console.log(err);
  }

  const element = data.replace(`../src/auro-combobox.js`, `auro-combobox__bundled.js`);

  fs.writeFile(indexFile, element, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
