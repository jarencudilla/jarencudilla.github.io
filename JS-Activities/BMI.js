var vheight = prompt("Victor's Height: (in Meters)");
var vmass = prompt("Victor's Weight: (in kg)");
var jheight = prompt("John's Height: (in Meters)");
var jmass = prompt("John's Weight: (in kg)");

bmi_victor = vmass / (vheight * vheight);
console.log (bmi_victor);
bmi_john = jmass / (jheight * jheight);
console.log (bmi_john);

var comp = bmi_victor > bmi_john;
console.log ("Is Victor's BMI higher than John's?  " + comp );

 