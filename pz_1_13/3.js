class MyRandom{
    static nextInt(low,high){
        return Math.round(Math.random() * (high - low) + low);
    }

    static nextDouble(low,high){
        return Math.random() * (high - low) + low;
    }

    static nextElement(array){
        let rand = Math.floor(Math.random() * Math.floor(array.length-1));
        return array[rand];
    }
}

console.log(MyRandom.nextInt(10,20));
let array = [1,2,5,3,5,5,3,23,5];
console.log(MyRandom.nextElement(array));