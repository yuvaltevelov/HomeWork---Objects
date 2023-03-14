// Task 04 
function makeArrary(names, ages) {
    var arrayOfPeople = [];

    for (let i = 0; i < names.length; i++) {
        var person = {
            name: names[i],
            age: ages[i]
        };
        debugger;
        arrayOfPeople.push(person);
    }

    return arrayOfPeople;
}

var names = ['Mobo', 'Bobo', 'Chogo'];
var ages = [25, 30, 35];

var people = makeArrary(names, ages);

console.log(people);