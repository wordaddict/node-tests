const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  })

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(4);

      expect(res).toBe(16).toBeA('number');
    });
    it('should async square a number', () => {
      utils.asyncSquare(2, (square) => {
        expect(square).toBe(4);
        done();
      });
  });
  });
});
