console.log('* Activity 1 *'); //Gives this section a title

const aNumber = Number(window.prompt("Type a number", "")); //Asks the user to input a number
const bNumber = Number(window.prompt("Type a number", ""));
const cNumber = Number(window.prompt("Type a number", ""));
if (aNumber === bNumber === cNumber) {   //Compares each number against the other to see if they are the same
console.log(' All numbers are the same'); } //Prints to the console if all numbers are the same
else {
console.log('All numbers are different'); }  //Prints to the console if all numbers are different

console.log('* Activity 2 *'); //Gives this section a title

const dNumber = Number(window.prompt("Type a number", "")); //Asks the user to input a number
const eNumber = Number(window.prompt("Type a number", ""));
const fNumber = Number(window.prompt("Type a number", ""));
if (dNumber < eNumber < fNumber) {   //Compares each number against the other to see if they are less than each other
console.log('The numbers are in increasing order'); } //Prints to the console if all numbers are increasing
else {
console.log('The numbers are in decreasing order'); }  //Prints to the console if all numbers are decreasing