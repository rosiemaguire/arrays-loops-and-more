/** 
 * The for loop has three parts, the initialisation, the condition and the
  increment 
 * The initialisation runs once at the start of the loop "let number = 0;". Here
  we're setting the starting number to 0. 
 * The condition is checked before each iteration of the loop "number < 10;".
  Here were checking if the number is less than 10.
  * The increment runs after each iteration of the loop "number++". Here we're
  incrementing the number by 1.
*/

for (let number = 0; number < 10; number ++) {
  console.log(number);
}

const numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

const countries = ["Australia","New Zealand","Japan","Indonesia"];

for (const country of countries) {
  console.log(country); 
}

countries.forEach((country) => {
  console.log(country);
})