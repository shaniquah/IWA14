// HOISTING---Calling a function before declaring it in the code
// Function overloading---Runs the last value given to the function(accidentally overrides it)
console.log(example3()) 

// Arrow Function Expression
const example1 = () => {
    return 123
}

// Traditional Function Expression
const example2 = function() {
    return 456
}

// Function Declaration
function example3 () {
    return 789
}

console.log(example1())
console.log(example2())
console.log(example3())

alert('123')