// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



  console.log('*********************************ASSIGNMENT********************************************')
  console.log('PART 1')

  //   Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivBy5= n1/5 && n2/5 && n3/5 && n4/5
console.log(isDivBy5);


// Check if the first number is larger than the last. Cache the result in a variable.
const isLarger = n1>n4
console.log(isLarger);


// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const sub = n2-n1;
const mul =sub*n3;
const rem= mul/n4;
console.log(rem);



console.log('*********************************ASSIGNMENT********************************************')
console.log('PART 2')

let distance = 1500;
let fuelBudget = 175;
let fuelCost = 3;

// gallons of fuel needed while travelling 55miles per hour => At 55 miles per hour, you get 30 miles per gallon.
// fuel required when travelling 55miles/hr 

let fuel55 = 1500/30;
//cost of fuel when travelling 55miles/hr 
let cost55 = fuel55 *3

// time taken while travelling at 55 miles/hr 
let time55 = 1500/55;
console.log(`${fuel55} gallons required while travelling at 55 miles per hour and the fuel cost is ${cost55}$ and the time taken is ${time55} hr`)

// gallons of fuel needed while travelling 60miles per hour => At 60 miles per hour, you get 28 miles per gallon.
let fuel60 = 1500/28;
let cost60 = fuel60 *3
let time60 = 1500/60;
console.log(`${fuel60} gallons required while travelling at 60 miles per hour and the fuel cost is ${cost60}$ and the time taken is ${time60} hr`)


// gallons of fuel needed while travelling 75miles per hour => At 75 miles per hour, you get 23 miles per gallon.
let fuel75 = 1500/23;
let cost75 = fuel75 *3
let time75 = 1500/75;
console.log(`${fuel75} gallons required while travelling at 75 miles per hour and the fuel cost is ${cost75}$ and the time taken is ${time75} hr`)

