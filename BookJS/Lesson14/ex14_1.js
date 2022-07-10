export function ex14_1() {
    let arr = [];
    let str = '';
    for (let i = 0; i < 5; i++) {
        str += 'x';
        arr.push(str);
    }

    console.log(`ex14_1: [${arr}]`);
}