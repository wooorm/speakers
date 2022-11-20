import assert from 'node:assert/strict'
import test from 'node:test'
import {speakers} from './index.js'

test('speakers', function () {
  assert.equal(speakers.eng, 322000000)
  assert.equal(speakers.jpn, 125000000)
  assert.equal(speakers.por, 182000000)
  assert.equal(speakers.cmn, 885000000)
})
