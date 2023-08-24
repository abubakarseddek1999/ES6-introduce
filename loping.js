const numbers =[1, 6, 8, 4];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
    
// }

for (const num of numbers) {
    // console.log(num);
}

const nobab ='Siraj ud Doula';
for (const char of nobab) {
    // console.log(char);
}

const glass = {name:'glass',
 color: 'golden', 
 price: 12, 
 isCleanded:true
};

for (const key in glass) {
    const value =glass[key];
    console.log(key, value);
}