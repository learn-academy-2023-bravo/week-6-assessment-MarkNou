// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('valueExtractor', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
  expect(valueExtractor(people)).toEqual([
    'Ford Prefect is a hitchhiker',
    'Zaphod Beeblebrox is president of the galaxy',
    'Arthur Dent is a radio employee'
  ])
})
})

//Jest Output: 
// FAIL  ./code-challenges.test.js
// valueExtractor
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)

// ● valueExtractor › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: valueExtractor is not defined


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

//Pseudocode:
//Create a function called 'valueExtractor' that takes in an array as a parameter
//Use '.map' to iterate through each value for the 'name' key by using dot notation
//Use '.split(' ')' to seperate all the letters into their own index
//Use '.map' to iterate through the letters and capitalize the first index[0] with '.toUpperCase'
//Join it back with the rest of the letters with '.slice'
//Join it back into a string
//Add it to the occupation values with dot notation
//Add allo together with string interpolation

const valueExtractor = (array) => {
  return array.map(value => `${value.name.split(' ').map(value => value[0].toUpperCase() + 
  value.slice(1)).join(' ')} is ${value.occupation}`);
}

//Jest Output:
// PASS  ./code-challenges.test.js
// valueExtractor
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (6 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.025 s

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

fdescribe('mixedDiv3', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    expect(mixedDiv3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mixedDiv3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//Jest Output:
// FAIL  ./code-challenges.test.js
// valueExtractor
//   ○ skipped takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// mixedDiv3
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (2 ms)

// ● mixedDiv3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

//Pseudocode
//Create a function called 'mixedDiv3' that takes an array as a parameter
// Create a variable called 'numbers' that will hold the extracted number values
// Use '.filter' and its built-in 'if' statement to check if the values are numbers with 'typeof'
// Iterate and return each value and mod by 3

const mixedDiv3 = (array) => {
  let numbers = array.filter(value => typeof value === 'number')
  return numbers.map(value => value % 3)
}

//Jest Output
// PASS  ./code-challenges.test.js
// valueExtractor
//   ○ skipped takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// mixedDiv3
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (4 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('sumCubed', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

//Jest Output
// PASS  ./code-challenges.test.js
// valueExtractor
//   ○ skipped takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// mixedDiv3
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (4 ms)
// sumCubed
//   ○ skipped takes in an array of numbers and returns the sum of all the numbers cubed

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

//Create a function called 'sumCubed' that takes an array as a parameter
//Create a variable called 'sum' that will hold the sum of the values
//Iterate through each value, cube it, add it to the 'sum variable'
//Return 'sum'

const sumCubed = (array) => {
  let sum = 0
  array.map(value => sum += (value ** 3))
  return sum 
}


  
