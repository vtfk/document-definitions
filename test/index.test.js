const test = require('ava')
const getDefinitions = require('../index')

test('returns default languange if no language is supplied', t => {
  const dd = getDefinitions('brevmal')
  const isFunction = typeof dd === 'function'
  t.is(isFunction, true)
})

test('returns default languange if none existing language is supplied', t => {
  const dd = getDefinitions('brevmal', 'blahblahbla')
  const isFunction = typeof dd === 'function'
  t.is(isFunction, true)
})
