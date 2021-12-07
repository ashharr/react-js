const person = {
  name: "Ashhar",
};

// // pointer copied not a copy created
// const secondPerson = person;

// person.name = 'Shaikh';

// console.log(secondPerson.name)

// a copy created no pointer copying
const secondPerson = {
  ...person,
};

person.name = "Shaikh";

console.log(secondPerson);
