'use strict'

const LONG_MSG_BITS = 112
const SHORT_MSG_BITS = 56

module.exports = msgLen

msgLen.LONG_MSG_BITS = LONG_MSG_BITS
msgLen.SHORT_MSG_BITS = SHORT_MSG_BITS

// Given the Downlink Format (DF) of the message, return the message length in
// bits
function msgLen (type) {
  if (type === 16 || type === 17 ||
      type === 19 || type === 20 ||
      type === 21) {
    return LONG_MSG_BITS
  } else {
    return SHORT_MSG_BITS
  }
}
