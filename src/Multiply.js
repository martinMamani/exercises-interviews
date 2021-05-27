function multiply(a, b) {
  let result = 0;

  //numeros a y b negativos
  if (a < 0 && b < 0) {
    for (let i = 0; i < Math.abs(b); i++) {
      result = result + a;
    }
    return -result;
  }
  //numero a negativo
  if (a < 0) {
    for (let i = 0; i < b; i++) {
      result = result + a;
    }
    return result;
  }
  //numeros a y b igual a 1
  if (a === 1 && b === 1) {
    return 1;
  }
  //numeros a y b igual a 0
  if ((a !== 0 && b == 0) || (b !== 0 && a == 0) || (b === 0 && a === 0)) {
    return 0;
  }
  //numeros a y b diferentes de 1 , a igual a 1 y b diferente de 1 y b igual a 1 y a diferente de 1
  if ((a !== 1 && b == 1) || (b !== 1 && a == 1) || (b !== 1 && a !== 1)) {
    for (let i = 0; i < a; i++) {
      result = result + b;
    }
  }
  return result;
}

module.exports = multiply;
