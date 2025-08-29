const {sum} = require ("./suma.js");

test('adds 7 + 3 to equal 10', () => {
    const resultado = sum(7, 3);
    expect(resultado).toBe(10);
})

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./suma.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

const { fromDollarToYen, fromYenToPound } = require('./suma.js');

test("1 USD should be 146.26 JPY", () => {
  expect(fromDollarToYen(1)).toBeCloseTo(146.26168);
});

test("1000 JPY should be 5.56", () => {
  expect(fromYenToPound(1000)).toBeCloseTo(5.56);
});

