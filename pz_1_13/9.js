class Worker {

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.days = days;
        this.rate = rate;
    }

    name = '';
    surname = '';
    rate = 0;
    days = 0;

    getSalary() {
        return this.rate * this.days;
    }
}

let fw = new Worker('ddd', 'fff', 150, 30);
console.log(fw.getSalary());