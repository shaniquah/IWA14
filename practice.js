// HOISTING---Calling a function before declaring it in the code
// Function overloading---Runs the last value given to the function(accidentally overrides it)
// console.log(example3())

// // Arrow Function Expression
// const example1 = () => {
//     return 123
// }

// // Traditional Function Expression
// const example2 = function() {
//     return 456
// }

// // Function Declaration
// function example3 () {
//     return 789
// }

// console.log(example1())
// console.log(example2())
// console.log(example3())

// alert('123')

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const multiplied = multiply(this.internal.a, this.internal.b);
  return added * multiplied;
}

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

console.log(example1.calculate()); // Expected output: 48
console.log(example2.calculate()); // Expected output: 12

//function that adds two numbers
function sum(a, b) {
  return a + b;
}

// calling sum() function
const result = sum.call(this, 5, 10);

console.log(result);

//Output:
// 15
