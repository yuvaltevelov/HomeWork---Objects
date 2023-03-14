function sortByAge(users) {
    users.sort((a, b) => a.age - b.age); // basically that line came from StackOverFlow which i'm not fully understand Avi
    return users;
}


var users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
];
var sortedUsers = sortByAge(users);
console.log(sortedUsers);
  // Output: [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
