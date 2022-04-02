# speakers

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Speaker count for 450+ languages.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`speakers`](#speakers-1)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package provides speaker counts for many languages.
Painstakingly crawled by hand from [OHCHR][].

> 👉 **Note**: the numbers are (in some cases, very) rough estimates or
> out-of-date.

## When should I use this?

You can use this package if you want to get a (comparative) estimate of how
many folks speak a certain language.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install speakers
```

In Deno with [`esm.sh`][esmsh]:

```js
import {speakers} from 'https://esm.sh/speakers@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {speakers} from 'https://esm.sh/speakers@2?bundle'
</script>
```

## Use

```js
import {speakers} from 'speakers'

console.log(speakers.eng) // => 322000000
console.log(speakers.jpn) // => 125000000
console.log(speakers.por) // => 182000000
console.log(speakers.cmn) // => 885000000
```

## API

This package exports the following identifiers: `speakers`.
There is no default export.

### `speakers`

Map of [ISO 639-3][i6393] codes to speaker counts (`number`).

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/bcp-47`](https://github.com/wooorm/bcp-47)
    — parse and stringify BCP 47 language tags
*   [`wooorm/bcp-47-match`](https://github.com/wooorm/bcp-47-match)
    — match BCP 47 language tags with language ranges per RFC 4647
*   [`wooorm/iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`wooorm/iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`wooorm/iso-15924`](https://github.com/wooorm/iso-15924)
    — ISO 15924 codes
*   [`wooorm/un-m49`](https://github.com/wooorm/un-49)
    — UN M49 codes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/speakers/workflows/main/badge.svg

[build]: https://github.com/wooorm/speakers/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/speakers.svg

[coverage]: https://codecov.io/github/wooorm/speakers

[downloads-badge]: https://img.shields.io/npm/dm/speakers.svg

[downloads]: https://www.npmjs.com/package/speakers

[size-badge]: https://img.shields.io/bundlephobia/minzip/speakers.svg

[size]: https://bundlephobia.com/result?p=speakers

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[ohchr]: https://www.ohchr.org

[i6393]: https://github.com/wooorm/iso-639-3
