/* ex 3: Пусть дан объект, ключами которого являются какие-то строки, а значением - числа.
Добавьте в наш объект функцию, которая будучи вызванной будет возвращать сумму элементов нашего объекта.*/

function ex3() {
    let symbol = Symbol('func');

    let obj = {
        a: 1,
        b: 2,
        c: 3,
        [symbol]: function() {
            let sum = 0;
            for (let value of Object.values(this)) {
                sum += value;
            }
            return sum;
        }
    }
    console.log(obj[symbol]());
}

/* ex 4-5: Пусть дан массив с числами. Добавьте в этот массив функцию, которая будет
возвращать сумму элементов этого массива. Сделайте так, чтобы наша функция имела символьный ключ.*/

function ex4() {
    let sym = Symbol.for('func');
    let arr = [1,5,7,6,2,6,1];
    arr[sym] = function () {
        let sum = 0;
        for (let x of this) {
            sum += x;
        }
        return sum;
    }
    console.log(arr[sym]());
}

ex4();
