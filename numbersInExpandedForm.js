/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

 */

function expandedForm(num) {
  let array = num.toString().split('');
  let result = [];
  for(let i = array.length; i > 0; i--){
    let number = array.shift();
    let length = array.length;
    if (number !== '0' && length > 0){
      number += '0'.repeat(length);
      result.push(number);
    } else if(length === 0 && number !== '0'){
      result.push(number);
    }
  }
  return result.join(' + ');
}
