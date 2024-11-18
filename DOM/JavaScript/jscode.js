console.log(' * Activity 1 * ');

const para = document.querySelector('p'); // Selects the elements with the 'p' tag and creates a variable
console.log(para);

para.setAttribute('style', 'color: red'); // Changes the text color to red

console.log(para.style); // Shows the CSS styling in the console

para.style.fontSize = 'larger'; // Makes the font size larger
para.style.backgroundColor = 'cyan'; // Changes the background to cyan behind the text
para.style.fontStyle = 'oblique';  // Changes the font style

console.log(' * Activity 2 * ');

function volume_sphere() { // Function for the volume of the sphere

  var volume;  // Creates a variable for the volume
  var radius = document.getElementById('radius').value;  // Gets the radius value from the user input 
  radius = Math.abs(radius);  // Takes the inout from the user of the radius and uses this for the calculation 
  volume = (4/3) * Math.PI * Math.pow(radius, 3);  // Calculates the volume of the sphere using the Math.pow and Math.PI values
  volume = volume.toFixed(2);  // Rounds the volume to 2 decimal places
  document.getElementById('volume').value = volume;  // Shows the calculated volume in the output box of the form
  return false;  // Returning false to prevent form submission
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere; // uses the volume_sphere function and loads it into the browser

console.log('see screenshot of webpage');
