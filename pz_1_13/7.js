const counts = (obj) =>{
    let count = 0;
    for(let key in obj){
        count++;
    }
    return count;
}




let a = { a: 1, b: 2 };
console.log(counts(a)); 
let b = function () {};
console.log(counts(b)); 
let c = [1, 2, 3];
console.log(counts(c)); 
let d = [];
d[100] = 1;
console.log(counts(d));