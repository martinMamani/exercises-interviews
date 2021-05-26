const fizzBuzz = require("../src/FizzBuzz");

describe("FizzBuzz", () => {
  test("dado el numero 0 la funcion devuelve el numero 0", () => {
    const resultado = fizzBuzz(0);
    expect(0).toBe(resultado);
  });
  test("dado el numero 1 la funcion devuelve el numero 1", () => {
    const valorEsperado = 1;
    const resultado = fizzBuzz(1);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado el numero 3 la funcion devuelve Fizz", () => {
    const valorEsperado = "Fizz";
    const resultado = fizzBuzz(3);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado un multiplo de 3 que en este caso es un 9 la funcion devuelve Fizz", () => {
    const valorEsperado = "Fizz";
    const resultado = fizzBuzz(9);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado el numero 5 la funcion devuelve Buzz", () => {
    const valorEsperado = "Buzz";
    const resultado = fizzBuzz(5);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado un multiplo de 5 que en este caso es 10 la funcion devuelve Buzz", () => {
    const valorEsperado = "Buzz";
    const resultado = fizzBuzz(10);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado un numero que es multiplo de 3 y de 5 la funcion devuelve FizzBuzz", () => {
    const valorEsperado = "FizzBuzz";
    const resultado = fizzBuzz(15);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado un string la funcion devuelve el siguiente mensaje - El valor ingresado no es un numero", () => {
    const valorEsperado = "El valor ingresado no es un numero";
    const resultado = fizzBuzz("50");
    expect(valorEsperado).toBe(resultado);
  });
});
