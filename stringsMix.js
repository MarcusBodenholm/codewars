/*Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
 */

function mix(...theArgs) {
  const obj = {
    1: {},
    2: {}
  };
  for (let i = 1; i <= arguments.length; i++){
    let string = arguments[i-1].split('');
    string.forEach(x => {
      if(checkLetter(x)){
        if (!obj[i][x]){
          obj[i][x] = 1;
        } else {
          obj[i][x] += 1;
        }
      }
    })
  };
  const array = [];
  for(const [key, value] of Object.entries(obj[1])){
    let value2 = obj[2].hasOwnProperty(key) ? obj[2][key] : 0;
    if(value > 1 || value2 > 1){
      if (value === value2){
        array.push(`=:${key.repeat(value2)}`)
      } else{
      value > value2 ? array.push(`${1}:${key.repeat(value)}`) : array.push(`${2}:${key.repeat(value2)}`)
      }
    }
  }
  for(const[key, value] of Object.entries(obj[2])){
    if (!array.some(x => x.includes(key)) && value > 1){
      array.push(`${2}:${key.repeat(value)}`)
    }
  }
  array.sort((a,b) => {
    if (b.length === a.length){
      if (a[0] !== '=' && b[0] === '='){
        return -1;
      } else if (a[0] === '=' && b[0] !== '='){
        return 1;
      } else {
        if (b[0].charCodeAt() === a[0].charCodeAt()){
          return a[3].charCodeAt() - b[3].charCodeAt();
        } else {
          return a[0].charCodeAt()-b[0].charCodeAt();
        }
      }
    } else {
      return b.length - a.length;
    }
    })
  return array.join('/')
}

function checkLetter(l){
  let code = l.charCodeAt();
  return code > 96 && code < 123;
}
