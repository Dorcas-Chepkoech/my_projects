function monkeyCount(n) {
    // your code here
    let monkeys = [];
    for (var i=1; i<=n; i++){
    monkeys.push(i);
    }
    return monkeys;
    }

    //OR 

function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));
        
    return arr;
}

    //OR

const monkeyCount = (n) => Array.from({length: n}, (item, index) => index + 1);