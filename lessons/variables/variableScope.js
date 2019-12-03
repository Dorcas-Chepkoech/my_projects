// var foo = 20; ---> Global Variable

// function myFunction(){}---> Local Variable

function getAverage(a, b) {

    var average = (a + b) / 2;// Local Variable

    //console.log(average);

    return average;
}
let myResult = getAverage(); // Global  Variable
console.log('The average is '+ myResult );

function logResult(){
    console.log("average" + myResult);
    logResult();  
}