# speakers

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Speaker count for 450+ languages.

Painstakingly crawled by hand from [OHCHR][], the numbers are (in some cases,
very) rough estimates or out-of-date.

## Install

[npm][]:

```sh
npm install speakers
```

## Use

```js
var speakers = require('speakers')

console.log(speakers.eng) // => 322000000
console.log(speakers.jpn) // => 125000000
console.log(speakers.por) // => 182000000
console.log(speakers.cmn) // => 885000000
```

## API

### `speakers`

Object mapping `string`s ([ISO 639-3][i6393] codes) to `number`s (speakers).

## Related

*   [`bcp-47`](https://github.com/wooorm/bcp-47)
    — Parse and stringify BCP 47 language tags
*   [`bcp-47-match`](https://github.com/wooorm/bcp-47-match)
    — Match BCP 47 language tags with language ranges per RFC 4647
*   [`iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`iso-15924`](https://github.com/wooorm/iso-15924)
    — ISO 15924 codes
*   [`un-m49`](https://github.com/wooorm/un-49)
    — UN M49 codes

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/speakers/workflows/main/badge.svg

[build]: https://github.com/wooorm/speakers/actions

[downloads-badge]: https://img.shields.io/npm/dm/speakers.svg

[downloads]: https://www.npmjs.com/package/speakers

[size-badge]: https://img.shields.io/bundlephobia/minzip/speakers.svg

[size]: https://bundlephobia.com/result?p=speakers

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[ohchr]: https://www.ohchr.org

[i6393]: https://github.com/wooorm/iso-639-3
