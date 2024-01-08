const numbers =[1,3,5,4,6,7,8,9,10,25]

const even = numbers.filter(isEven);

function isEven(value){
    return value%2===0;
}

console.log(numbers);
console.log(even);