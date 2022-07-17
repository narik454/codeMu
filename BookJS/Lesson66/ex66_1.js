class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let student = new Student('ivan', 'ivanov', 2018);


console.log(student.getFullName());
console.log(student.getCourse());