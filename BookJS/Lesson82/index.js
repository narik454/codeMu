function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

/* Сделайте функцию getNum, которая возвращает промис,
который с задержкой в 3 секунды выведет случайное число от 1 до 5.
Создайте async функцию, которая с помощью await будет дожидаться результата getNum,
затем возводить его в квадрат и выводить на экран. */

function ex82_1() {
    function getNum() {
        return new Promise(resolve => {
            let rand = random(1, 5);
            console.log('rand: ' + rand);
            setTimeout(() => {
                resolve(rand);
            }, 3000)
        })
    }

    async function func() {
        let result = await getNum();
        console.log(result ** 2);
    }

    console.log(func());
}


/* Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
Создайте async функцию, которая с помощью await будет дожидаться результата getNum1,
затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выведет на экран. */


function ex82_2() {
    function getNum1() {
        return new Promise(resolve => {
            let rand = random(1, 5);
            console.log('rand1: ' + rand);
            setTimeout(() => {resolve(rand)}, 3000);
        });
    }

    function getNum2() {
        return new Promise(resolve => {
            let rand = random(6, 10);
            console.log('rand2: ' + rand);
            setTimeout(() => {resolve(rand)}, 5000);
        });
    }

    async function func() {
        let result1 = await getNum1();
        let result2 = await getNum2();
        console.log(result1 + result2);
    }

    console.log(func());
}


//ex82_1();
//ex82_2();