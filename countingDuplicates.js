/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text){
  let normalText = text.toLowerCase().split('').sort();
  let filter = []
  let result = 0;

  normalText.forEach(x => {
    if (!filter.includes(x)) {
      filter.push(x);
    }
  })
  filter.forEach(x => {
    let test = normalText.filter(letter => letter === x);
    if (test.length > 1) {
      result++
    }
  })
  return result;
  
}
