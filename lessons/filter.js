var animals =[
    {name: 'White', species: 'cow'},
    {name: 'Fluffy', species: 'dog'},
    {name: 'Dylan', species: 'dog'},
    {name: 'Bob', species: 'cat'},
    {name: 'Snoop', species: 'dog'}
]

//long format
var dogs = [];
for (var i = 0; i<animals.length; i++){
    if (animals[i].species === 'dog');
    dogs.push(animals[i])
}

//higher order function (filter)
var dogs = animals.filter(function(animal){
    return animal.species === 'dog';
})
console.log(dogs);

//reject method
var isDog = animals.filter(isDog)
var otherAnimals = animals.reject(isDog);