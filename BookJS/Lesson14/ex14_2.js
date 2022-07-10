export function ex14_2() {
    let arr = [];
    let str = '';

    for (let i = 1; i <= 5; i++) {
        str = '';
        for (let j = 1; j <= i; j++) {
            str += i;
        }
        arr.push(str);
    }

    console.log(`ex14_2: [${arr}]`)
}