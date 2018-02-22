module.exports = function getZerosCount(number) {
  if (number >= 0 && number < 5) return 0;
  if (number > 0) {

  let count = 0;
  for (let i = 1; Math.floor(number / Math.pow(5, i)) >= 1; i++) {
    count += Math.floor(number / Math.pow(5, i));
  }

  return count;
  }
}
