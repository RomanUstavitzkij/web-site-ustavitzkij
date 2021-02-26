const uniq = (array) => {
    alert(Array.from(new Set(array)));
}

let array = [1,2,2,2,3,4,2,5,6,4,7,8,4];
uniq(array);