'use strict';

var Interface,
    data;

Interface = require('datamap-interface');
data = require('./data/speakers');

module.exports = new Interface(data);
