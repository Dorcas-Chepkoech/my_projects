
function removeEveryOther(arr){
    let index = 1;
    while (arr.length > index){
    arr.splice(index,1)
    index += 1
      //your code here
    }
    return arr;
    }