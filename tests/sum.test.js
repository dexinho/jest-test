const sum = require('../sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('testing', () => {
  expect(sum(1, 1)).toBe(2)
})
