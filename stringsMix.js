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
