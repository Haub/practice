// --- Directions
// Given a string, return a new string with the reversed
// order of characters

function reverse(str) {
  let reversed = '';
  for(let character of str) {
    reversed = character + reversed
}
  return reversed
}


function reverse(str) {
  const rev = str.split('')
  rev.reverse()
  return rev.join('')
}


module.exports = reverse;