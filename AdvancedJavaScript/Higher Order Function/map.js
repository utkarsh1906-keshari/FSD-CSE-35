// .map = ek array create krta h usme har element pr ek function apply krke uska result store krta h

let arr = [1,2,3,4,5];

// for(let i =0 ; i < arr.length; i++){
//     let sq= arr[i] * arr[i];
//     console.log(sq);
// }


let square = arr.map(function(num){
    return num*num;
})
console.log(square);


let square1 = arr.map((num) => num * num);
console.log(square1);