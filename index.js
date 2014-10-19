'use strict';

/**
 * Dependencies.
 */

var Interface;

Interface = require('datamap-interface');

/**
 * Data.
 */

var speakers;

speakers = require('./data/speakers.json');

/**
 * Expose speakers.
 */

module.exports = new Interface(speakers);
