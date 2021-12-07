//Array Destructuring
const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1, num2)

const numbers2 = [1,2,3];
[num1, ,num3] = numbers2;
console.log(num1, num3)


//Object Destructuring

// let myObj = {
//   name: 'Ashhar',
//   age: 22
// };

{myName} = {
  mynNme: 'Ashhar',
  age: 22,
};
console.log(myName);