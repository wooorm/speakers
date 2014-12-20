'use strict';

/**
 * Dependencies.
 */

var information,
    iso6393,
    plainTextToJSON,
    fs;

information = require('udhr').information();
iso6393 = require('iso-639-3');
fs = require('fs');
plainTextToJSON = require('plain-text-data-to-json');

/**
 * Input.
 */

var speakers;

speakers = plainTextToJSON(fs.readFileSync('data/speakers.txt', 'utf-8'));

/**
 * Output.
 */

var dictionary;

dictionary = {};

Object.keys(speakers).forEach(function (ohchr) {
    var iso,
        info,
        object;

    speakers[ohchr] = Number(speakers[ohchr]);

    if (speakers[ohchr] === -1) {
        console.log(
            'Ignoring `' + ohchr + '` due to unknown speaker count.'
        );

        return;
    }

    object = {
        'speakers': speakers[ohchr]
    };

    Object.keys(information).forEach(function (key) {
        if (information[key].OHCHR === ohchr) {
            iso = information[key].ISO;
        }
    });

    if (!iso) {
        console.log(
            'Ignoring `' + ohchr + '` due to unknown ISO number.'
        );

        return;
    }

    info = iso6393.get(iso);

    if (!info) {
        console.log(
            'Ignoring `' + ohchr + '` (ISO: `' + iso + '`) due to ' +
            'unknown ISO information.'
        );

        return;
    }

    if (info) {
        object.iso6391 = info.iso6391 || null;
        object.iso6392 = info.iso6392T || null;
        object.name = info.name || null;
    }

    dictionary[iso] = object;
});

fs.writeFileSync('./data/speakers.json', JSON.stringify(dictionary, null, 2));
