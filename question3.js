const square = function (number) {
  return number * number;
};
console.log(square(7));

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const mathOperation = [add, subtract, multiply, divide];
function calculator(a, b, opertion) {
  return opertion(a, b);
}

console.log("add:", calculator(3, 5, mathOperation[0]));
console.log("subtract:", calculator(4, 3, mathOperation[1]));
console.log("multiply:", calculator(2, 5, mathOperation[2]));
console.log("divide:", calculator(4, 2, mathOperation[3]));

// a number you use directly while a function is something you can invoke later to perfom an action
// store them in variables
//it enables patttern like callback a
