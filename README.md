<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/README.md`
and copied to `./componentDocs/README.md` each time the the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Combobox

`<auro-combobox>` is the combination of [dropdown](http://auro.alaskaair.com/components/auro/dropdown), [input](http://auro.alaskaair.com/components/auro/input), and [menu](http://auro.alaskaair.com/components/auro/menu) and allows users to filter search results from a predefined list as they type. When the user starts typing in the text input, a dropdown of a menu shows up to display options that match the user’s search.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-combobox/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-combobox/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-combobox?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-combobox)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-combobox?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurodesignsystem/auro-combobox
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-combobox>` component.

```js
import "@aurodesignsystem/auro-combobox";
```

**Reference component in HTML**

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-combobox__bundled.js` for modern browsers and `auro-combobox__bundled.es5.js` for legacy browsers (including IE11).

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

### Bundle example code

```html
<!-- **NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk. -->
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />
<script src="https://unpkg.com/@aurodesignsystem/auro-combobox@latest/dist/auro-combobox__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurodesignsystem/auro-combobox@latest/dist/auro-combobox__bundled.es5.js" nomodule></script>
```

## auro-combobox use cases

The `<auro-combobox>` element should be used in situations where users may:

* Search
  * Airports: user looks for a specific airport by searching for the city name or airport code
  * Site wide: user searches for a topic site wide and combobox makes suggestions on searchable results
* Filter
  * Options: user chooses filters for their search by using combobox
* Select
  * Quantity: user types a quantity to select an option within a range (for example, the user may be limited to 2-34)

## API Code Examples

### Default auro-combobox

```html
<auro-combobox>
  <span slot="label">Name</span>
  <auro-menu>
    <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
    <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
    <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
    <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
    <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
    <auro-menuoption static nomatch>No matching option</auro-menuoption>
  </auro-menu>
</auro-combobox>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch

$ npm run serve
```

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-combobox.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run build:demo` to create a `./build` directory that can be pushed to any static server.

