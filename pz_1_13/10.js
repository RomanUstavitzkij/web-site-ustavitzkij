class ElStation{

    power = 0;

    constructor(power){
        this.power = power;
    }

    get GetPower(){
        return this.power;
    }

    toString(){
        return this.power;
    }
}

class SunBattarey{

    power = 0;

    constructor(power){
        this.power = power;
    }

    get GetPower(){
        return this.power;
    }

    toString(){
        return this.power;
    }
}

class House{

    count = 0;
    waste = 0;

    constructor(count, waste){
        this.count = count;
        this.waste = waste;
    }

    toString(){
        return this.count + ' ' + this.waste;
    }

    getWaste(){
        return this.count * this.waste;
    }
}

class ElLine{

    power = 0;
    cost = 0;

    constructor(power, cost){
        this.cost = cost;
        this.power = power;
    }

    toString(){
        return this.cost + ' ' + this.power;
    }

    canSell(){
        return this.power;
    }

    getSell(){
        return this.power*this.cost;
    }
}

const genStation = () =>{
    let count = Math.round(Math.random() * 10);
    let arrayOfSt = [count];
    let power = 0;
    for(let i = 0; i<count; i++){
        arrayOfSt[i] = new ElStation(Math.floor(Math.random() * Math.floor(100000)));
        power+=arrayOfSt[i].toString();
    }
    console.log('Nuclear station: ' + power);
    return arrayOfSt;
}
const genSunStation = () =>{
    let count = Math.round(Math.random() * 10);
    let arrayOfSt = [count];
    let power = 0;
    for(let i = 0; i<count; i++){
        arrayOfSt[i] = new SunBattarey(Math.floor(Math.random() * Math.floor(5000)));
        power+=arrayOfSt[i].toString();
    }
    console.log('Sun Station: ' + power);
    return arrayOfSt;
}
const genHouse = () =>{
    let count = Math.round(Math.random() * 100);
    let arrayOfSt = [count];
    let spozivae = 0;
    for(let i = 0; i<count; i++){
        arrayOfSt[i] = new House(Math.round(Math.random() * 400), Math.floor(Math.random() * Math.floor(5)));
        spozivae +=arrayOfSt[i].getWaste();
    }
    console.log('Houses spend: ' + spozivae);
    return arrayOfSt;
}
const genLine = () =>{
    let count = Math.round(Math.random() * 10);
    let arrayOfSt = [count];
    let prodano = 0;
    for(let i = 0; i<count; i++){
        arrayOfSt[i] = new ElLine(Math.round(Math.random() * 20000), Math.floor(Math.random() * Math.floor(20)));
        prodano +=arrayOfSt[i].canSell();
    }
    console.log('Can sell/buy: ' + prodano);
    return arrayOfSt;
}

const calculate = (elst, sunst, house, line) =>{
    let sumPower = 0;
    elst.forEach(x => sumPower+=x.toString());
    sunst.forEach(x => sumPower+=x.toString());
    console.log('Can make in 1 day: ' + sumPower)
    house.forEach(x => sumPower-=x.getWaste());
    console.log('Lost after house take energy: ' + sumPower);
    line.forEach(x => sumPower-=x.canSell());
    console.log('After sell energy: ' + sumPower);
}



let st = genStation();
let sun = genSunStation();
let h = genHouse();
let l = genLine();

calculate(st,sun,h,l);