// function declaration

// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add1(a, b){
    const result = a + b;
    // return result;
    return a + b;
}
const sums = add1(5,90);
console.log(sums);

// function expression
  const add2 =function(a, b){
    return a + b;
  }
//   arrow function
const add3 = (a , b) => a + b;
const sum = add3(5, 93);
console.log(sum);