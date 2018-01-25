const sortLogic = require('../sortLogic');

describe('sortLogic', () => {
  it('returns a string', () => {
    expect(typeof sortLogic('123')).toBe('string');
  })
})