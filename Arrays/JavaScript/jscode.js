console.log('* Activity 1 *');

const numbers = [1,2,3,4,5,6,7,8,9,10]; // Defines the array
let sum = 0; // Holds the running total using the sum variable
for(let i = 0; i < numbers.length; i++) {  
    sum += numbers[i]; // Equals sum plus the numbers
  }
console.log(sum); // Prints the sum of all the numbers to the console

console.log('* Activity 2 *');

const numbers1 = [20,30,25,35,-16,60,-100]; // Defines the array
let sum1 = 0; // Holds the running total using the sum variable
for(let i = 0; i < numbers1.length; i++) {  
    (sum1 += numbers1[i]); // Equals sum plus the numbers
}
console.log(sum1 / numbers1.length); // Prints the sum of all the numbers divided by 7 (the count of the numbers in the array) to the console

console.log('* Activity 3 *');

const numbers2 = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];  // Defines the array
console.log(numbers2);
let max = numbers[0]; // Starts at the first Number in the array
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}
console.log('The maximum number is: ' + max); //Prints the largest number in the array to the console

let min = numbers2[0]; // Starts at the first Number in the array
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] < min) {
        min = numbers2[i];
    }
}
console.log('The minimum numbers is: ' + min); //Prints the smallest number in the array to the console

