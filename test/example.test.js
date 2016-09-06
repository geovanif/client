/**
 * This is an example for test
 */
'use strict'

const should = require('chai').should()
const example = require('../src/assets/scripts/modules/hello').hello('dev')

describe('Example test', () => {
  it('Example should return a string', () => {
    example.should.be.a('string')
  })

  it('Example greeting should equal', () => {
    example.should.equal('Hello dev from Boost')
  })
})
