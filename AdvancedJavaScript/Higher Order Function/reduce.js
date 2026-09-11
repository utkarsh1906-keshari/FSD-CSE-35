// reduce 


let arr = [1,2,3,4,5];

let total = arr.reduce((sum, number)=>{
    return sum + number;

}, 0);
console.log(total);


let total1 = arr.reduce((max, number)=> Math.max(max, number), arr[0]);
console.log(total1);

