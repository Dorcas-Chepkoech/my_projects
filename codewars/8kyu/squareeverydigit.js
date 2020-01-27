function squareDigits(num){
    let numString = num.toString();
    let result = [];
  
    for(var i = 0; i < numString.length; i++) {
      result[i] = Math.pow(numString[i], 2);
    }
  
    return Number(result.join(''));
  }