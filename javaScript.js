/* console.log('Task1')

let i = 0;
while(i<100){
    if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 9 != 0){
        console.log(i);
    }
    i++;
}


console.log('Task3')

for(let a = 0; a<10;console.log(a++)){}

console.log('Task2')

let b = 0;
do{
    if(b == 0) console.log(b +' nol');
    else if(b % 2 ==0) console.log(b + ' parne chislo');
    else console.log(b + ' neparne chislo');
    b++
}while(b<10)
*/

console.log('Task4')

let floor = prompt('vvedit kilkist etazhiv')
for(let s = 1; s <= floor; s++){
    let rez = '';
    let zi = '*';
    let c = 1;
    while(c<=s){
        rez += zi;
        c++;
    }
    rez += '\n';
    
    console.log(rez);
    
}

for(let s = 1; s <= floor; s++){

    rez += '\n';
}
/*

console.log('Task5')

let numb = 10000;
let result = 0;
let counter = 0;
for(let dil = 0; numb > 50; dil++){
    numb = numb/2;
    if(numb<50){
        result = numb;
        counter = dil;
    }
}
console.log(result);
console.log(counter);

console.log('Task6')

let mon = prompt('enter number of month');
switch(mon){
    case '1':
        console.log('zima, sichen');
        break;
    case '2':
        console.log('zima, lyutiy');
        break;
    case '3':
        console.log('vesna, berezen');
        break;
    case '4':
        console.log('vesna, kviten');
        break;
    default:
        console.log('unknown');
        break;
}

console.log('Task7')

    let temp = prompt('vvedit temperaturu')
    alert((9/5)*temp+32 + ' temperatura po farengeitu');

console.log('Task8')

    let ind = prompt('vvedit chislo 1-7')
    switch(ind){
        case '1':
            alert('ponedilok');
            break;
        case '2':
            alert('vivtorok');
            break;
        case '3':
            alert('sereda');
            break;
        case '4':
            alert('chetverg');
            break;
        case '5':
            alert('pyatnitsa');
            break;
        case '6':
            alert('subota');
            break;
        case '7':
            alert('nedilya');
            break;
    }
    */