const find = (path) => {
    let f_path = path.split('/');
    let file = f_path[f_path.length-1].split('.');
    return file[1];
}

const file = '/fpdf/sdf/erf.d/ma.in/first.html';
alert(find(file));