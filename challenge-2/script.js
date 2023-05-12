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

// Not allowed to change below this

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

example1.calculate();
example2.calculate();

// Code runs smoothly but does not print any values to console---lines 39 and 40 call the example variables without using any call functions or surrounding statements to print the returned values
// Even when surrounded with a call function('console.log()') the respective values do not print as planned(48 and 16 are printed to the console respectively)
