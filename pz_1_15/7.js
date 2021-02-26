const date = () => {
    let data = new Date();
    let fullTimeNow = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    let dayMap = new Map([[0, 'nedilya'],
    [2, 'vivtorok'],
    [3, 'sereda'],
    [4, 'chetverg'],
    [5, 'pyatnitsa'],
    [6, 'subota']]);
    let monthMap = new Map([[0, 'sichen'],
    [1, 'lyutiy'],
    [2, 'berezen'],
    [3, 'kviten']]);

    return fullTimeNow + ', ' + dayMap.get(data.getDay()) + ', ' + data.getDate() + ' ' + monthMap.get(data.getMonth()) + ' ' + data.getFullYear() + ' roku';
}

alert(date());