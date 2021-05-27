function getBiggest(array) {
  let higher = 0;
  if (array.length === 0) {
    return higher;
  }
  if (array.length === 1) {
    higher = array[0];
    return higher;
  }
  higher = array[0];
  for (let i = 1; i < array.length; i++) {
    if (higher < array[i]) {
      higher = array[i];
    }
  }
  return higher;
}

module.exports = getBiggest;
