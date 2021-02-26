const symbhol = (text) => {
    let array = text.split(' ');
    let positive = 0;
    let negative = 0;
    array.forEach(a => {
        if (a.toLowerCase().startsWith('а') ||
            a.toLowerCase().startsWith('о') ||
            a.toLowerCase().startsWith('у') ||
            a.toLowerCase().startsWith('ї') ||
            a.toLowerCase().startsWith('я') ||
            a.toLowerCase().startsWith('ю') ||
            a.toLowerCase().startsWith('є')) {
            positive++;
            console.log(a + 't');
        }
        else {
            negative++;
            console.log(a + 'f');
        }
    });
    return text + '\nголосні: ' + positive + 'приголосні: ' + negative;
}

let text = 'якщо перший символ першої строки більше менше, ніж перший символ другої, то перша строка більша менша за другу. Порівняння завершено.'
alert(symbhol(text));