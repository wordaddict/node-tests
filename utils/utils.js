module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;


module.exports.asyncSquare = (x, callback) => {
setTimeout(() => {
  callback(x * x)
}, 1000)
};
