console.log(' * Activity 1 * ');

    const numbers = [10,2,3,4,7];  // Defines the array

    function array(numbers) {
        return numbers;
    }

    console.log('The contents of the array are: ' + numbers); //prints out the contents of the array using the fnction as defined


let max = numbers[0];  // Starts at the first Number in the array
    for (let i = 1; i < numbers.length; i++) 
    if (numbers[i] > max) 
       max = numbers[i]; 

function num(max) { 
    return max;
}

console.log('The maximum number is: ' + num(max)); //Prints the largest number in the array to the console using the defined max value by the function

console.log(' * Activity 2 * ');

function factorial(n) {  // Defines the function
        if (n === 0) { // Tells the function that 0! = 1
            return 1;
        } else {
        return factorial(n-1) * n;  // Calculates Factorial n
    }
    }

    let n = 5;  // Defines the number to be used  
  
  console.log('The factorial of ' + n + ' is ' + factorial(n));  // Prints the factorial of 5 to the console. (1*23*4*5)

  console.log(' * Activity 3 * ');


const number = parseInt(prompt("Enter a positive number: ")); // Asks the user to input a positive number
let isPrime = true;

if (number === 1) {  // Checks if number is equal to 1
    }
   
  if (number > 1) {  // Checks if number is greater than 1
    for (let i = 2; i < number; i++) { 
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
 }    

    if (isPrime) { // Prints out if the number is a prime number or not a prime number
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    } 