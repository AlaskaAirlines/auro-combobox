// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

function writeDepVersionFile(pkg) {
  console.warn('writeDepVersionFile', pkg);

  const fs = require('fs');

  const path = '../node_modules/' + pkg + '/package.json';
  const json = require(path);
  const version = json.version;
  const elemSubName = pkg.substring(pkg.indexOf('auro-') + 5);
  const versionFilePath = './src/' + elemSubName + 'Version.js';

  fs.writeFileSync(versionFilePath, `export default '${version}'`);
};

// add the code below
module.exports = { writeDepVersionFile };
