const getBiggest = require("../src/GetBiggest");

describe("GetBiggest", () => {
  test("dado un array vacio la funcion devuelve 0 ", () => {
    const valorEsperado = 0;
    const resultado = getBiggest([]);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado un array con un elemento el mayor es ese mismo elemento", () => {
    const valorEsperado = 5;
    const resultado = getBiggest([5]);
    expect(valorEsperado).toBe(resultado);
  });
  test("dado un array con [2,3,10,5] el mayor es el numero 10", () => {
    const valorEsperado = 10;
    const resultado = getBiggest([2, 3, 10, 5]);
    expect(valorEsperado).toBe(resultado);
  });
});
