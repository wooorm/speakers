# speakers [![Build Status](https://travis-ci.org/wooorm/speakers.svg?branch=master)](https://travis-ci.org/wooorm/speakers) [![Coverage Status](https://img.shields.io/coveralls/wooorm/speakers.svg)](https://coveralls.io/r/wooorm/speakers?branch=master)

Speaker count for 370 languages.

Painstakingly crawled by hand from [OHCHR](http://www.ohchr.org), the numbers are (in some cases, very) rough estimates or out-of-date.

## Installation

npm:
```sh
$ npm install speakers
```

Component:
```sh
$ component install wooorm/speakers
```

Bower:
```sh
$ bower install speakers
```

## Usage

```js
var speakers = require('speakers');

speakers.get('eng');
/**
 * {
 *   speakers: 322000000,
 *   iso6391: 'en',
 *   iso6392: 'eng',
 *   name: 'English'
 * }
 */

speakers.get('dut');
/**
 * {
 *   speakers: 21000000,
 *   iso6391: 'nl',
 *   iso6392: 'nld',
 *   name: 'Dutch'
 * }
 */

speakers.has('unicorn'); // false

speakers.remove('eng');
speakers.get('eng'); // null

speakers.all(); // An array with 370 objects.
```

## API

See [the **datamap-interface** API](https://github.com/wooorm/datamap-interface).

## Supported Languages

See [Supported-languages.md](Supported-languages.md).

## License

MIT © Titus Wormer
