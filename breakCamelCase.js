/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */
function solution(string) {
  return string.split(/([A-Z][a-z]+)/).reduce((a, b, i) => b ? i == 0 ? a = b : a + " " + b : a, "");
}

/* Note:
Note the best solution around I realize, but it is mine. 
/*
