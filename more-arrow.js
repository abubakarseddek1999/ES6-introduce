// const multi = (x, y) => x * y;
// console.log(multi(3, 2))

// function differences(a, b){
//     return a*b;

// }
// console.log(differences(6, 2));

// const differences = (x, y) => x -y;
// console.log(differences(3, 2))
// ..........................................................
// normal function

// function getAge(person){
//     return person.age;
// }
// const student ={
//     name:'abu bakar',
//     age: 45 
// }
// console.log(getAge(student));

// arrow function
// single parameter oe one parameter

const getAge =(person) => person.age;
const age= getAge({
    name:'abu bakar',
    age: 45 
})
console.log(age)

const doubleIt = num => num* 2;
console.log(doubleIt(2))

// no parameter
const getPI = () => Math.PI
console.log(getPI())