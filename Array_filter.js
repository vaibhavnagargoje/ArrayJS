const numbers =[1,3,1,2,4,2,1,6,8,9,6,6,5,,5,4,6,7,8,9,10,25]

const even = numbers.filter(isEven);

function isEven(value){
    return value%2===0;
}

console.log(numbers);
console.log(even);


const nums = numbers.filter((value,index,arr)=>{
    // console.log(value,index);
    return arr.indexOf(value)===index;
})
console.log(nums);