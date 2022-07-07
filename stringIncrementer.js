/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


*/

function incrementString (strng) {
  if (isNaN(strng[strng.length-1])) {
    return strng += '1';
  }
  if (strng[strng.length-1] === '0'){
    return strng.slice(0, strng.length-1) + '1';
  };
  const zeros = strng.match(/(0)+(?=[1-9])/);
  const nr0s = zeros ? zeros[0].length : 0;
  const numbers = strng.match(/(?![0])([0-9])+/)[0];
  const string = strng.slice(0, strng.length - (nr0s + numbers.length));
  return combine(string, nr0s, numbers);
}
function combine (string, nr0, digits) {
  const newDigits = String(Number(digits)+1);
  const diff = newDigits.length - digits.length;
  const zeroStr =  nr0-diff > -1 ? '0'.repeat(nr0-diff) : "";
  return string + zeroStr + newDigits;
}
