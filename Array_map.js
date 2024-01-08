const numbers= [2,4,6,6,7,2,2,1,3]

newNumbers = numbers.map(double);  // map fuction dosen't change original array it create new array


function double(value, index,arr){
    return value*2
}
console.log(numbers);
console.log(newNumbers);


//using callbach
newNum= numbers.map((item)=> {
    return item*5
})
console.log(newNum);




const products =[
    {
        name:"laptop",
        price:5000,
        count:5
    },
    {
        name:'desktoop',
        price:3000,
        count:3
    },
    {
        name:'phone',
        price:1000,
        count:10
    }
]

const Total = products.map((item)=>{
   return item.price*item.count
});
console.log(Total);