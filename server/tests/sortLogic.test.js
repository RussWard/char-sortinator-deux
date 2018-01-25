const sortLogic = require('../sortLogic');

describe('sortLogic', () => {
  it('returns a string', () => {
    expect(typeof sortLogic('123')).toBe('string');
  });
  it('returns a string of the given characters in descending uncode order', () => {
    expect(sortLogic('123')).toEqual('321');
  });
});