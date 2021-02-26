const retField = (field, ...array) =>{
    for (const key in array) {
        const value = array[key];
        console.dir({ key, value });
    }
}

let array = [
    {name : 'Roman', age : 23, role : 'male'},
    {name : 'Dima', age : 15, role : 'male'},
    {name : 'Nastya', age : 20, role : 'female'}
];
retField('name', array);