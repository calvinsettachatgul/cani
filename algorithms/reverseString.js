function reverseString(str){
  let newStr = "";
  if(str === null){
    return null;
  }
  if(str.length){
    for (let i = str.length-1; i >= 0; i--){
      newStr += str[i];
    }
  }
  return newStr;
}

module.exports = reverseString;