// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { literal, unsafeStatic } from 'lit/static-html.js';

export class AuroDependencyVersioning {

  /**
   * Generates a unique string to be used for child auro element naming.
   * @private
   * @param {string} baseName - Defines the first part of the unique element name.
   * @param {string} version - Version of the component that will be appended to the baseName.
   * @returns {string} - Unique string to be used for naming.
   */
  generateElementName(baseName, version) {
    let result = baseName;

    result += '-';
    result += version.replace(/[.]/g, '_');

    return result;
  }

  /**
   * Generates a unique string to be used for child auro element naming.
   * @param {string} baseName - Defines the first part of the unique element name.
   * @param {string} version - Version of the component that will be appended to the baseName.
   * @returns {string} - Unique string to be used for naming.
   */
  generateTag(baseName, version, tagClass) {
    const elementName = this.generateElementName(baseName, version);
    const tag = literal`${unsafeStatic(elementName)}`;

    if (!customElements.get(elementName)) {
      customElements.define(elementName, class extends tagClass {});
    }

    return tag;
  }
}
