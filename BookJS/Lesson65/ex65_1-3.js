class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getName() {
        return this.name
    }

    getSurname() {
        return this.surname;
    }

    getRate() {
        return this.rate;
    }

    getDays() {
        return this.days;
    }

    getSalary() {
        return this.rate * this.days;
    }

    setRate(rate) {
        this.rate = rate;
    }

    setDays(days) {
        this.days = days;
    }
}

let worker = new Worker('Ivan', 'Ivanov', 12, 10);

console.log(worker.getSalary())
worker.setDays(30);
worker.setRate(10);
console.log(worker.getDays());
console.log(worker.getSalary())