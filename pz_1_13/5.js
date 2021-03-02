function sequence(a, b){
    let start = a;
    let krok = b;
    return () => start += krok;
}
let generator = sequence(10, 3);
let generator2 = sequence(7, 1);
console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());