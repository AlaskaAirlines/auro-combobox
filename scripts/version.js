// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

const fs = require('fs');

const dropdownJson = require('../node_modules/@aurodesignsystem/auro-dropdown/package.json');
const dropdownVersion = dropdownJson.version;

fs.writeFileSync('./src/dropdownVersion.js', `export default '${dropdownVersion}'`);

const inputJson = require('../node_modules/@aurodesignsystem/auro-input/package.json');
const inputVersion = inputJson.version;

fs.writeFileSync('./src/inputVersion.js', `export default '${inputVersion}'`);
