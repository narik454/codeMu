function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


/* Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов,
найдите его сумму, выведите на экран. */

function lesson80() {
    function promise(num) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 1000);
            }, num * 1000)
        });
    }

    let arr = [promise(random(1,5)), promise(random(1,5)), promise(random(1,5))];

    Promise.all(arr).then(results => {
        let sum = results.reduce((sum, elem) => {
            return sum += elem;
        });
        console.log(`arr: [${results}]\nsum = ${sum}`);
    });
}

/* Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран. */


function lesson81() {
    let rands = [random(1, 5), random(1, 5), random(1, 5),];
    let promises = [
        new Promise(resolve => {
            setTimeout(() => {
                resolve(1);
            }, rands[0] * 1000);
        }),
        new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, rands[1] * 1000);
        }),
        new Promise(resolve => {
            setTimeout(() => {
                resolve(3);
            }, rands[2] * 1000);
        }),
    ]

    console.log(rands);

    Promise.race(promises).then(value => console.log(value));
}

lesson81();