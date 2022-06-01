/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
  const obj = {};
  string.split('').forEach(x => {
    if (obj[x]){
      obj[x] += 1;
    } else {
      obj[x] = 1;
    };
  });
  return obj;
}
