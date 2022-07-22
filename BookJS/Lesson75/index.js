/* ex 2: Даны абзацы. Получите их через querySelectorAll, переберите через цикл for-of,
добавьте каждому абзацу в конец текста восклицательный знак.
ex 3: Дан массив. Обратитесь к его элементу с ключом Symbol.iterator и выведите результат в консоль.*/

let p = document.querySelectorAll('p');

for (let elem of p) {
    elem.innerText += '!';
}

console.log('   ex 3:');
console.log(p[Symbol.iterator]);

/* ex 4: Сделайте функцию-генератор, которая будет возвращать итератор.
Первый вызов метода next итератора должен вернуть 1, второй вызов - 2, третий вызов - 3. */

console.log('   ex 4:');

function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/* ex 5: Переберите итератор, полученный в предыдущей задаче через цикл for-of. */

console.log('   ex 5:');

iterator = createIterator();
for (let elem of iterator) {
    console.log('for of: ' + elem)
}

/* ex 6: Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива по одному. */

console.log('   ex 6:');

let arr = [4, 6, 1, 6];

function *arrIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

let arrIter = arrIterator(arr);

console.log(arr);
for (let arrIterElement of arrIter) {
    console.log('arrIterator: ' + arrIterElement);
}

/* ex 7: Дан массив. С помощью функции-генератора создайте итератор, перебирающий элементы массива с конца. */

console.log('   ex 7:');

function *arrIteratorRev(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        yield arr[i];
    }
}

let arrIterRev = arrIteratorRev(arr);

console.log(arr);
for (let item of arrIterRev) {
    console.log('arrIterator--: ' + item);
}

/* ex 8: Дан массив. С помощью функции-генератора создайте итератор, каждый вызов которого
будет возвращать по два элемента массива (сначала первые два, потом вторые два и так далее).
Элементы должны возвращаться в виде массива из двух элементов. */

console.log('   ex 8:');

let arr2 = [1,2,3,4,5,6,7,8,9,0];

function *doubleArrIterator(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        yield [arr[i], arr[i + 1]];
    }
}

let doubleIterator = doubleArrIterator(arr2);

console.log(arr2);
for (let elem of doubleIterator) {
    console.log(`doubleIterator: [${elem}]`);
}


/* ex 11: Дан объект. С помощью функции-генератора создайте его итератор,
 переберите элементы этого объекта с помощью цикла for-of. */

console.log('   ex 11:');

let obj = {
    a: 1,
    b: 2,
    c: 3
}

function *objIterator(obj) {
    for (let key in obj) {
        yield obj[key];
    }
}

let objIter = objIterator(obj);

console.log(obj);
for (let elem of objIter) {
    console.log(`objIterator: ${elem}`);
}

/* ex 12: Дан объект. Сделайте так, чтобы его элементы можно было перебрать с помощью цикла for-of. */

console.log('   ex 12:');

let iterableObj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator]() {
        for (let key in this) {
            yield this[key];
        }
    }
}

for (let elem of iterableObj) {
    console.log(`iterableObj: ${elem}`);
}

/* ex 13: Дан массив. Переберите элементы этого массива через цикл for-of так,
чтобы в каждой итерации в переменную elem записывался элемент массива, а в переменную key - ключ. */

console.log('   ex 13:');

let arr3 = [2,5,21,6,2,2,1,21,36,1];
let iterator2 = arr3.entries();

for (let [key, value] of iterator2) {
    console.log(`[${key}, ${value}]`);
}