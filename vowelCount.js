/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str) {
  let regex = /([a|e|i|o|u])/g;
  let arr = [...str.matchAll(regex)];
  let vowelsCount = arr.length;
  // enter your majic here
  return vowelsCount;
}
