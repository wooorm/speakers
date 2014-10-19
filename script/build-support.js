'use strict';

var fs,
    speakers,
    sortedSpeakers;

fs = require('fs');
speakers = require('../').all();

sortedSpeakers = [];

Object.keys(speakers).forEach(function (iso6393) {
    speakers[iso6393].iso6393 = iso6393;
    sortedSpeakers.push(speakers[iso6393]);
});

sortedSpeakers.sort(function (a, b) {
    return b.speakers - a.speakers;
});

fs.writeFileSync('Supported-languages.md',
    'Supported Languages\n' +
    '=================\n' +
    '\n' +
    'For more information on ISO codes, see [infoterm.info]' +
    '(http://www.infoterm.info/standardization/ISO_639.php) or [Wikipedia]' +
    '(http://en.wikipedia.org/wiki/ISO_639).\n' +
    '\n' +
    '| 639-3 | Speakers | 639-2T | 639-1 | Name |\n' +
    '| ----: | -------: | :----- | :---- | :--- |\n' +

    sortedSpeakers.map(function (language) {
        return '| ' +
            [
                '[' + language.iso6393 + '](' +
                'http://www.ethnologue.com/language/' + language.iso6393 +
                ')',
                language.speakers,
                language.iso6392 || '',
                language.iso6391 || '',
                language.name || ''
            ].join(' | ') +
            ' |';
    }).join('\n') +

    '\n'
);
