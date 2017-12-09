'use strict'

const assert = require('assert')
const msglen = require('./')

const longs = [16, 17, 19, 20, 21]

assert.equal(msglen.LONG_MSG_BITS, 112)
assert.equal(msglen.SHORT_MSG_BITS, 56)

for (let n = 0; n < 255; n++) {
  const length = longs.indexOf(n) !== -1 ? msglen.LONG_MSG_BITS : msglen.SHORT_MSG_BITS
  assert.equal(msglen(n), length)
}
