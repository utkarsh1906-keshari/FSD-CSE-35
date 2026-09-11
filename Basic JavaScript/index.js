// let j=1;
// for(;;){
    
//     if(j>10){
//         break;
//     }
//      console.log(j);
//      j+=2;
// }

// let sum=0;
// for(let i=0;i<=9;i++,sum+=i);
// console.log(sum);

// let x=4,y=0,z;
// while(x>=0){
//     x--;
//     y++;
//     if(x==y)
//         continue;
//     else 
//         console.log(x,y);
// }



// let x=15;
// let y=(x++ , x+2);
// console.log(x ,  y);

let a = [10, 20, 30, 40, 50];

for (let i = 0, j = a.length - 1; i < j; i++, j--) {
    [a[i], a[j]] = [a[j], a[i]];
}

console.log(a);