// electrons.js
function ElectronsCalculator() { }

ElectronsCalculator.prototype.aroundTheCores = function (numbers) {
  // only add odd number and subtract one
  let result = 0;
  for (let num of numbers) {
    if (num % 2 != 0 ) {
      result += num - 1;
    }
  }
  return result;
};

module.exports = ElectronsCalculator;
