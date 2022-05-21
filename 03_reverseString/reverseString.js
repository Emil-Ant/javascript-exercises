const reverseString = function(input) {
let chars = input.split(""); 
let reverseChars = chars.reverse(); 
let finalChars = reverseChars.join("");
return finalChars;  
};


// Do not edit below this line
module.exports = reverseString;
