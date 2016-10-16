'use strict';

/* Dependencies. */
var test = require('tape');
var speakers = require('./');

/* Tests. */
test('speakers', function (t) {
  t.equal(speakers.eng, 322000000);
  t.equal(speakers.jpn, 125000000);
  t.equal(speakers.por, 182000000);
  t.equal(speakers.cmn, 885000000);

  t.end();
});
