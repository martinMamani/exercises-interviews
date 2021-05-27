const multiply = require("../src/Multiply");
//descripe.skip
describe("Multiply", () => {
  test("saber cuanto es la multiplicacion de 2 por 5 sin usar el operador * ", () => {
    const valorEsperado = 10;
    const resultado = multiply(2, 5);
    expect(valorEsperado).toBe(resultado);
  });
  test("saber cuanto es la multiplicacion de 2 por 1 sin usar el operador *", () => {
    const valorEsperado = 2;
    const resultado = multiply(2, 1);
    expect(valorEsperado).toBe(resultado);
  });
  test("saber cuanto es la multiplicacion de 1 por 1 sin usar el operador *", () => {
    const valorEsperado = 1;
    const resultado = multiply(1, 1);
    expect(valorEsperado).toBe(resultado);
  });
  test("saber cuanto es la multiplicacion de 0 por 0 sin usar el operador *", () => {
    const valorEsperado = 0;
    const resultado = multiply(0, 0);
    expect(valorEsperado).toBe(resultado);
  });
  test("saber cuando es la multiplicacion de -2 por 3 sin usar el operador *", () => {
    const valorEsperado = -6;
    const resultado = multiply(-2, 3);
    expect(valorEsperado).toBe(resultado);
  });
  test("saber cuando es la multiplicacion de 2 por -4 sin usar el operador *", () => {
    const valorEsperado = -8;
    const resultado = multiply(2, -4);
    expect(valorEsperado).toBe(resultado);
  });
  test("saber cuando es la multiplicacion de -2 por -2 sin usar el operador *", () => {
    const valorEsperado = 4;
    const resultado = multiply(-2, -2);
    expect(valorEsperado).toBe(resultado);
  });
});
