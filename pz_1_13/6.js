const retField = (field, array) => {
    let resultArray = new Map();
    for (let i = 0; i < array.length; i++) {
        for (let key in array[i]) {
            if (key == field) {
                resultArray.set(key, array[i][key]);
                console.log(key, array[i][key]);
            }
        }
    }
    return resultArray;
}

let array = [
    { name: 'Roman', age: 23, role: 'male' },
    { name: 'Dima', age: 15, role: 'male' },
    { name: 'Nastya', age: 20, role: 'female' }
];
retField('name', array);