function clearZeroFalseUndefinedNull(array) {
  let arrayAux = [];
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    if (array[0]) {
      return array;
    } else {
      return [];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arrayAux.push(array[i]);
    }
  }
  return arrayAux;
}

module.exports = clearZeroFalseUndefinedNull;
