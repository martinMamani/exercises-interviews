const clearZeroFalseUndefinedNull = require("../src/ClearZeroFalseUndefinedNull");

describe("ClearZeroFalseUndefinedNull", () => {
  test("dado un array vacio devuelve el mismo array", () => {
    const valorEsperado = [];
    const resultado = clearZeroFalseUndefinedNull([]);
    expect(valorEsperado).toStrictEqual(resultado);
  });
  test("dado un array con un elemento 0 devuelve un array vacio", () => {
    const valorEsperado = [];
    const resultado = clearZeroFalseUndefinedNull([0]);
    expect(valorEsperado).toStrictEqual(resultado);
  });
  test("dado un array con un elemento 5 devuelve el array con ese elemento", () => {
    const valorEsperado = [5];
    const resultado = clearZeroFalseUndefinedNull([5]);
    expect(valorEsperado).toStrictEqual(resultado);
  });
  test("dado un array [5,3,4,0,null,6] devuelve el array [5,3,4,6]", () => {
    const valorEsperado = [5, 3, 4, 6];
    const resultado = clearZeroFalseUndefinedNull([5, 3, 4, 0, null, 6]);
    expect(valorEsperado).toStrictEqual(resultado);
  });
  test("dado un array [2,5,8,9] devuelve un array con [2,5,8,9]", () => {
    const valorEsperado = [2, 5, 8, 9];
    const resultado = clearZeroFalseUndefinedNull([2, 5, 8, 9]);
    expect(valorEsperado).toStrictEqual(resultado);
  });
  test("dado un array [2,5,hola,4,false,8,undefined,9,7] devuelve un array con [2,5,'hola',4,8,9,7]", () => {
    const valorEsperado = [2, 5, "hola", 4, 8, 9, 7];
    const resultado = clearZeroFalseUndefinedNull([
      2,
      5,
      "hola",
      4,
      false,
      8,
      undefined,
      9,
      7,
    ]);
    expect(valorEsperado).toStrictEqual(resultado);
  });
});
