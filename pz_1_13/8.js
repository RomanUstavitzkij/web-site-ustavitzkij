class Task {

    nazva = '';
    opis = '';
    dataP;
    dataF;

    constructor(nazva, opis, dataP, dataF){
        this.nazva = nazva;
        this.opis = opis;
        this.dataP = new Date(dataP);
        this.dataF = new Date(dataF);
    }

    toString(){
        return 'Назва події: ' + this.nazva + '\nОпис події: ' + this.opis + '\nДата початку: ' + this.dataP + '\nДата завершення: ' + this.dataF;
    }
}

class FinishedTask extends Task{
    vitsotokV = 0;
    isFinished = false;

    constructor(nazva, opis, dataP, dataF,vitsotokV, isFinished){
        super(nazva, opis, dataP, dataF);
        this.vitsotokV = vitsotokV;
        this.isFinished = isFinished;
    }

    toString(){
        return super.toString() + '\nВиконано на: ' + this.vitsotokV + '%' + '\nПрапор завершення: ' + this.isFinished;
    }
}

let mz = new Task('випускной', 'выпускной 11-а', '2017-06-24', '2017-06-25');
let sz = new FinishedTask('випускной', 'выпускной 11-а', '2017-06-24', '2017-06-25', 76, true);
console.log(mz.toString());
console.log(sz.toString());