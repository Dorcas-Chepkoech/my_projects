function numberToPower(number, power){
    // Code here
    var result = 1;
    if(power == undefined){
    power = 2;}
    for(var i=1; i<= power; i++){
    result = result *number;
    }
    return result;
  }