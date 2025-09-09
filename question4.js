function createMultiplier(multiplier) {
  return function (input) {
    return input * multiplier;
  };
}

const doubler = createMultiplier(2);
const tripler = createMultiplier(3);
const halver = createMultiplier(0.5);

console.log(doubler(5));
console.log(tripler(4));
console.log(halver(8));
// - A function can return another because functions are values in Javascript.
// Useful for creating reusable functions.
//The inner function "remembers" multiplier [keeps access to outer scope].
