'use strict'

function throwException(msg) {
  const e = { Error: msg}
  throw e
}


module.exports = {
  throwException
}