for (i = 0; i< 10; i++){
    console.log(i);
if (i === 5 || i === 3){

    continue;// skips the code for the iteration for i
}
    if(i === 7){
        break; // breaks out of the code
    }
}

console.log('broken out of the loop');
