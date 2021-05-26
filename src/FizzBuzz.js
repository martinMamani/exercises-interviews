function fizzBuzz(n) {
  if (typeof n !== "number") {
    return "El valor ingresado no es un numero";
  }
  if (n === 0) {
    return 0;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return n;
}

module.exports = fizzBuzz;
