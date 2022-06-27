function diamond(n){
  if (n % 2 === 0 || n<1){
    return null;
  } else if (n === 1){
    return "*\n";
  }
  let partOne = [];
  let partTwo = [];
  let counter = 1;
  for(let i = 1; i <= n; i+=2){
    let text = ""
    if(i === n){
      text += asterisk(i);
      partOne.push(text)
      break;
    } else {
      text += space((n-i)/2) + asterisk(i)
      partOne.push(text);
      partTwo.unshift(text);
    }
  }
  return partOne.concat(partTwo).join('');
}

function asterisk(n){
  return '*'.repeat(n) + '\n';
}
function space(n){
  return ' '.repeat(n);
}
