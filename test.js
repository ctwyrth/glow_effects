// cars1 is a object which is containing
// the attributes Brand  & Color
const cars1 = {
   Brand : "Toyota",
   Color : "RED"
}
// cars2 is a object which is containing
// the attributes Brand, Color & Year
const cars2 = {
   Brand : "Nissan",
   Color : "BLUE",
   Year : 2004
}
const cars3 = {...cars1,...cars2};
console.log(cars3);

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
   var min = 0;
   var max = array.length - 1;
   var guess;
   
   while (min <= max) {
      guess = Math.floor((min + max)/2);
      console.log(min, max, guess, array[guess]);
      if (array[guess] === targetValue) {
         return guess;
      } else if (array[guess] < targetValue) {
         min = guess + 1;
      } else {
         max = guess - 1;
      }
   }

return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);
