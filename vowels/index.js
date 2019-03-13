// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.


function vowels(str) {
  let vowelCounter = 0;
  const lowerVowels = str.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of lowerVowels) {
    if(vowels.includes(char)) { 
      vowelCounter++
    }
  }
  return vowelCounter;
}



module.exports = vowels;