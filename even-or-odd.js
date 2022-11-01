// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/javascript
// Create a function that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

// **********************************************************

//  My initial solution

function even_or_odd(number) {
  // figure out if number is odd or even
  // conditional with modulo
  // return odd or even depending if condition returns true or false

  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

// best answer/practice

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
