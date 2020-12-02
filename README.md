![Tests](https://github.com/vtfk/document-definitions/workflows/Run%20tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/vtfk/document-definitions/badge.svg?branch=main)](https://coveralls.io/github/vtfk/document-definitions?branch=main)
[![NPM](https://img.shields.io/npm/v/@vtfk/document-definitions.svg)](https://www.npmjs.com/package/@vtfk/document-definitions)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# document-definitions

Node module for document-definitions

## API

*id* the id for requested document definition
*language* the language for the document definition, defaults to `no_nb`

## Usage

```
$ npm i @vtfk/document-definitions
```

```JavaScript
const getDD = require('@vtfk/document-definitions')
const dd = getDD('brevmal', 'no_nn')
const pdfDefinition = dd(data)
```

## Definitions

- [brevmal](./docs/brevmal.md)

## License

[MIT](LICENSE)
