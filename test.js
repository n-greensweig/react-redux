let colors = ['orange', 'green', 'magenta'];

// .push modifies the original array
colors.push('purple'); // OK in vanilla JS, not okay for redux

// Make a copy of the array with a new item
let colorsCopy = [...colors, 'blue']
console.log('colors:', colors);
console.log('colorsCopy:', colorsCopy);

let person = { firstName: 'Noah', };
let person2 = person;
person2.lastName = 'Cantoni';
let personCopy = { ...person, lastName: 'Greensweig', };
console.log('person:', person);
console.log('personCopy:', personCopy);