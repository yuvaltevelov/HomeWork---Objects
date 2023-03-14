/* //Task 03

    // Normal
function getFormattedName(firstname, lastname) {
    return `${firstname}, ${lastname}`
}

function getAge(BirthYear, CurrentYear) {
    return CurrentYear - BirthYear
}

function getUserInfo(firstName, lastName, birthYear, CurrentYear) {
    var name = getFormattedName(firstName, lastName);
    var age = getAge(birthYear, CurrentYear);
    return { name, age };
}

console.log(getUserInfo('Yuval', 'Tevelov', 1999, 2023))
*/


// Better visual version

/**
 * 
 * @param {*} getFormattedFName(firstname) using argumnent firstname 
 * @returns  to return the value of the argument been placed
 */

function getFormattedFName(firstname) {
    if (!fullname || typeof fullname == 'number') {
        throw new TypeError('You enter something else but letters, refresh the page and write letters dude !')
    }
    return firstname
}

/**
 * 
 * @param {*} getFormattedLName(lastname) using argumnent lastname 
 * @returns  to return the value of the argument been placed
 */
function getFormattedLName(lastname) {
    if (!fullname || typeof fullname == 'number') {
        throw new TypeError('You enter something else but letters, refresh the page and write letters dude !')
    }
    return lastname
}

/**
 * 
 * @param {*} BirthYear using the number been place at the argument position
 * @currentYear using the function 
 * @returns to return the the number less (minus) the current year
 */
// function getAge(BirthYear) { // been used with Option 2 --> less Advanced function for getAge
//     var currentYear = new Date().getFullYear();
//     return ', ' + (currentYear - BirthYear);
// }



/**
 * Returns the age based on the given birth year.
 * @param {number} BirthYear - The year of birth as a four-digit number (e.g. 1990).
 * @throws {TypeError} If the BirthYear argument is not a number or cannot be converted to a number or empty.
 * @returns {string} The age in years, formatted as a string with a leading comma and space (e.g. ", 31").
 */

function getAge(BirthYear) {// been used for Option 2 --> More advanced function for getAge
    var currentYear = new Date().getFullYear();
    if (typeof BirthYear !== 'number' || isNaN(BirthYear)) {
        throw new TypeError('The BirthYear argument must be a number.');
    }
    if (!BirthYear) {
        var BirthYear = prompt('You forgot type your birthday year')
        if (!BirthYear) {
            console.log(
                '%cNo sir we w\'ont continue until you type your age 🔥😡🤬',
                'font-size: 20px; background-color: yellow; color:red; margin-left: 20px;');
            throw new TypeError('What can i do Avi, without age we won\'t continue the shit :D');

        }
        return (currentYear - BirthYear);
    }
    return (currentYear - BirthYear);
}

function getUserInfo(firstName, lastName, birthYear) {

    var firstName = getFormattedFName(firstName)
    var lastName = getFormattedLName(lastName)
    // var age = new Date().getFullYear() - birthYear;
    var age = getAge(birthYear).toString(); // - Option 2
    return { firstName, lastName, age };
}

var fullname = prompt("Please enter your first name, last name, separated by commas: \n for eaxample: Yuval,Tevelov not (Yuval, Tevelov) ");
var [firstName, lastName] = fullname.split(",");

var userAge = +prompt('What is your birth date') // the + makes it number

console.log(getUserInfo(firstName, lastName, userAge))

/* 
// Much shorter way
function getUserInfo() {
    var firstName = prompt("Please enter you first name:");
    var lastName = prompt("Please enter your last name:");
    var birthYear = prompt("Please enter your birth year:");
    var age = new Date().getFullYear() - birthYear;
    var user = { firstName, lastName, age };
    return user;
  }
  console.log(getUserInfo())
  */
