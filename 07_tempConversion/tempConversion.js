const ftoc = function(fahrenheit) {
  parseInt(fahrenheit);
  calctoc = (fahrenheit - 32) * (5 / 9);
  roundedtoc = Math.round(calctoc * 10) / 10;
  return roundedtoc; 

};

const ctof = function(celcius) {
  parseInt(celcius); 
  calctof = (celcius * 1.8 + 32);
  roundedtof = Math.round(calctof * 10) / 10
  return roundedtof; 

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
