const game = () => {
    let counter = 1;
    let number = Math.round(Math.random() * 100);
    let sproba = '';
    alert(number);
    while (number != sproba) {
        sproba = prompt('спробуйте вгадати');
        alert(generate(counter, sproba, checkResult(sproba, number)));
        counter++;
    }
}

const checkResult = (enter, fix) => {
    let resultMap = new Map([[0, 'вітаю!!!'],
    [5, 'дуже гаряче'],
    [10, 'гаряче'],
    [15, 'дуже тепло'],
    [20, 'тепло'],
    [25, 'прохолодно'],
    [50, 'холодно'],
    [70, 'дуже холодно']])
    let divine = Math.abs(enter - fix);
    for (let i = divine; i < 70; i++) {
        if (i == 0) {
            return resultMap.get(0);
        }
        if (i > 1 && i <= 5) {
            return resultMap.get(5);
        }
        if (i > 5 && i <= 10) {
            return resultMap.get(10);
        }
        if (i > 10 && i <= 15) {
            return resultMap.get(15);
        }
        if (i > 15 && i <= 20) {
            return resultMap.get(20);
        }
        if (i > 20 && i <= 25) {
            return resultMap.get(25);
        }
        if (i > 25 && i <= 50) {
            return resultMap.get(50);
        }
        if (i > 50) {
            return resultMap.get(70);
        }
    }
}

const generate = (counter, number, result) => {
    let data = new Date();
    let fullTimeNow = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    let fullDate = data.getDate() + '.' + Number.parseInt(data.getMonth()+1) + '.' + data.getFullYear();
    let vidminokMap = new Map([[1, 'спробу'],
    [2, 'спроби'],
    [5, 'спроб']])
    if (result == 'вітаю!!!') {
        let sproba = counter == 1 ? vidminokMap.get(1) : counter > 1 && counter < 5 ? vidminokMap.get(2) : counter > 5 ? vidminokMap.get(5) : ' ';
        return fullDate + ' ' + fullTimeNow + ' За ' + counter + ' ' + sproba + ' ви вгадали число';
    }
    return fullDate + ' ' + fullTimeNow + ' Спроба №' + counter + ': число ' + number + ' - ' + result;
}

isGame = confirm('wanna play?') == true ? true : false;
if (isGame == true) {
    game();
}