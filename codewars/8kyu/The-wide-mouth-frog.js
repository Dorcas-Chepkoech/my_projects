function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
  }


  ///OR

  function mouthSize(animal) {
    if(animal === 'alligator' || animal ==='ALLIGATOR'){
    return 'small';
    } else {
    return 'wide';
    }
      // code here
    }