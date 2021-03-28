import test from 'tape'
import {speakers} from './index.js'

test('speakers', function (t) {
  t.equal(speakers.eng, 322000000)
  t.equal(speakers.jpn, 125000000)
  t.equal(speakers.por, 182000000)
  t.equal(speakers.cmn, 885000000)

  t.end()
})
