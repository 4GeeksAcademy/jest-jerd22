
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const sum = (a, b) => {
  return a + b;
};

console.log(sum(7,3))

module.exports = { sum };

const multiply = (a, b) => {
  return a * b;
};

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar}

function fromDollarToYen(dollar) {
  const euros = dollar / oneEuroIs.USD;
  const yenes = euros * oneEuroIs.JPY;
  return yenes;
}

function fromYenToPound(yen) {
  const euros = yen / oneEuroIs.JPY;
  const pounds = euros * oneEuroIs.GBP;
  return pounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };



