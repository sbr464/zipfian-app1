Write a program that counts the numbers from 3 to 117. But for multiples of three add 3 instead of 1 and for the multiples of five add 5 instead of 1. For numbers which are multiples of both three and five add 15 instead of 1. Ex: If we are looking at numbers 5 to 15 (inclusive), the program would output 39 


// Program function takes 2 arguments, min & max. min is the starting number, max is the ending number that is inclusive. Program will count between these 2 numbers and return variable n, which is the total count. 

var program = function(min, max){
  
  var n = 0;

  for (min; min <= max; min++) {
    if (min % 3 === 0 && min % 5 === 0){
      n += 15;
    } else if (min % 3 === 0) {
      n += 3;
    } else if (min % 5 === 0) {
      n += 5;
    } else {
      n += 1;
    }
  }
  return n;
};


program(3, 117);