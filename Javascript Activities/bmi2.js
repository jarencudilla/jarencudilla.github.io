var vheight = 1.5;
var vmass = 72;
var jheight = 1.9;
var jmass = 64;

bmi_victor = vmass / (vheight * vheight);
console.log (bmi_victor);
bmi_john = jmass / (jheight * jheight);
console.log (bmi_john);

var comp = bmi_victor > bmi_john;
console.log ("Is Victor's BMI higher than John's?  " + comp );
