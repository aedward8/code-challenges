// Create a function that takes two integers and displays the larger one.
//
// Example:
//
// largestInt(11, 22) → 22
//
// largestInt(22, 44) → 44
//
// * Hints:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators

function largestInt(a,b){
  if (a<b) {
    return b;
  } else {
    return a;
  }
}
console.log(largestInt(11, 22));
module.exports = largestInt;
