const glass = {name:'glass', color: 'golden', price: 12, isCleanded:true};

console.log(glass); 
const keys =Object.keys(glass); 

console.log(keys); // [ 'name', 'color', 'price', 'isCleanded' ]

const values =Object.values(glass);
console.log(values);  // [ 'glass', 'golden', 12, true ]

const pair =Object.entries(glass);
console.log(pair)
// array of array

// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleanded', true ]
//   ]

// delete korar jonno use korbo

// delete glass.isCleanded;
// console.log(glass);


// freeze
Object.freeze(glass)
glass.source ='bangladesh'
glass.price =5000
console.log(glass);
