let Surface = function (width, height) {
    this.width = width;
    this.height = height;
    this.unserline = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M']

    this.createBoard = function (w, h) {
        for (let i = 1; i < Number.parseInt(height) + 1; i++) {
            let string = '';
            string += i + ' ';
            for (let j = 1; j < Number.parseInt(width) + 1; j++) {
                if(i%2 !=0){
                    if (j % 2 != 0) {
                        string += '\@ ';
                    }
                    else {
                        string += '\# ';
                    }
                }
                else{
                    if (j % 2 != 0) {
                        string += '\# ';
                    }
                    else {
                        string += '\@ ';
                    }
                }
            }
            console.log(string)
        }
        let string = '  ';
        for (let i = 0; i < width; i++) {
            string += this.unserline[i] + ' ';
        }
        console.log(string);
    }
}

let w = prompt('enter width:');
let h = prompt('enter height:');
let matrix = new Surface(w, h);
matrix.createBoard(matrix.width, matrix.height);