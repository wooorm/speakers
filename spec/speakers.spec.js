'use strict';

/**
 * Dependencies.
 */

var speakers,
    assert;

speakers = require('..');
assert = require('assert');

/**
 * Tests.
 */

describe('speakers.get(property)', function () {
    it('should return the value of an item in the database', function () {
        var result;

        result = speakers.get('eng');

        assert(typeof result === 'object');
        assert(result.speakers === 322000000);
        assert(result.iso6391 === 'en');
        assert(result.iso6392 === 'eng');
        assert(result.name === 'English');
    });

    it('should return null if am item is not in the database', function () {
        assert(speakers.get('zzz') === null);
    });
});

describe('speakers.has(property)', function () {
    it('should return if an item is in the database', function () {
        assert(speakers.has('eng') === true);
        assert(speakers.has('unicorn') === false);
    });

    it('should not fail on prototpe extending', function () {
        /* eslint-disable no-extend-native */
        Object.prototype.unicorn = 'mammal';

        assert(!speakers.has('unicorn'));

        delete Object.prototype.unicorn;
        /* eslint-enable no-extend-native */
    });

    it('should not fail on native properties', function () {
        assert(!speakers.has('toString'));
        assert(!speakers.has('constructor'));
        assert(!speakers.has('hasOwnProperty'));
    });
});

describe('speakers.all()', function () {
    var all;

    all = speakers.all();

    it('should return an object', function () {
        assert(typeof all === 'object');
    });

    it('should return all values in the datamap', function () {
        assert(Object.keys(all).length === 370);
        assert('eng' in all);
        assert('nld' in all);
    });

    it('should be immutable', function () {
        all.unicorn = 'mammal';

        assert(!speakers.has('unicorn'));
        assert(!('unicorn' in speakers.all()));
    });
});
