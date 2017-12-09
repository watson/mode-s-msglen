# mode-s-msglen

A utility library for getting the message length of Mode S messages
based on the downlink format.

[![Build status](https://travis-ci.org/watson/mode-s-msglen.svg?branch=master)](https://travis-ci.org/watson/mode-s-msglen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install mode-s-msglen --save
```

## Usage

```js
const msglen = require('mode-s-msglen')

let msgbits = msglen(17)
```

## API

### Constants

- `LONG_MSG_BITS`
- `SHORT_MSG_BITS`

### `len = msglen(type)`

Given the Downlink Format (DF) of the Mode S message, return the message
length in bits.

## License

MIT
