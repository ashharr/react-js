// spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);

const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}
console.log(newPerson);


//rest
const filter = (...args) => args.filter(val => val ==1);

console.log(filter(1,2,3))