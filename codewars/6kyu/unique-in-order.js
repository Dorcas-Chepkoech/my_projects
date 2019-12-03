var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
//should work with empty array
// should work with one element
 //should reduce duplicates (5 of 5 Assertions)
 //and treat lowercase as different from uppercase
// and work with int arrays
// and work with char arrays



//METHOD 2

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var finalArray = [];
  var tempArray = [];
  if (Array.isArray(iterable) === false){
  tempArray = iterable.split('');
  } else {
  tempArray = iterable;
  }
  for (i=0; i < tempArray.length; i++){
  if (tempArray[i] != tempArray[i-1]){
  finalArray.push(tempArray[i]);
  }
  }
  return finalArray;
  };
  uniqueInOrder([1,2,2,3,3]);