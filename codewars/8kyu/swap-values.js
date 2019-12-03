function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  }



  /// OR

  
  function swapValues() {
      var arg = Array.prototype.slice.call(arguments)[0];
      var temp = arg[0];
      arg[0] = arg[1];
      arg[1] = temp;
      return arg;
  }