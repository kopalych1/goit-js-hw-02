function makeTransaction(quantity, pricePerDroid, customerCredits) {
  if (
    !Number.isInteger(quantity) ||
    typeof pricePerDroid !== 'number' ||
    isNaN(pricePerDroid) ||
    typeof customerCredits !== 'number' ||
    isNaN(customerCredits)
  )
    throw new TypeError(
      `Expected int, float float; got: ${typeof quantity}, ${typeof pricePerDroid} ${typeof customerCredits}`
    );

  let dronePrice = quantity * pricePerDroid;

  if (dronePrice > customerCredits) return 'Insufficient funds!';

  return `You ordered ${quantity} droids worth ${dronePrice} credits!`;
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
