let javaScriptisFun = true;
console.log(javaScriptisFun);

console.log(typeof true);
console.log(typeof javaScriptisFun);
console.log(typeof 23);
console.log(typeof "Reza");

// operator power
let power = 2 ** 3;
console.log(power);
// operator concat
const firstName = 'Reza';
const lastName = 'Rahmani';
const fullName = firstName + lastName;

// Template String literal
const firstNameNew = `${firstName}`;
console.log(firstNameNew);

// Conversion
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(inputYear + 18); // 18 converted to string and concat to inputYear

console.log('23' - '10' -3); // strings converted to numbers

let n = '1' + 1;
n = n -1;
console.log(n); // Output is 10!


console.log(Boolean(0)); // Output is false
console.log(Boolean(undefined)); // Output is false

const money = 0;
if(money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}
// The Output of if statement is line 44 because money is false boolean.

const age = 18;
// === is Equality Operator.
if(age === 18) console.log('You just became an adult:D(strict)');
// == is Type conversion Operator.

if(age === 18) console.log('You just became an adult:D(loose)');

const favaourtie = Number(prompt("What's your favourite number?"));

if(favaourtie === 23) { // 232 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!');
}