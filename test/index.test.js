const test = require('ava')
const getDefinitions = require('../index')
const isFunction = (dd) => typeof dd === 'function'
const isObject = (dd) => typeof dd === 'object'

test('returns default languange if no language is supplied', t => {
  const [dd, styles] = getDefinitions('brevmal')
  t.is(isFunction(dd), true)
  t.is(isObject(styles), true)
})

test('returns default languange if none existing language is supplied', t => {
  const [dd, styles] = getDefinitions('brevmal', 'blahblahbla')
  t.is(isFunction(dd), true)
  t.is(isObject(styles), true)
})
