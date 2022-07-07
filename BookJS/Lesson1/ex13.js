export function ex13() {
    let num = '12345';
    let res = 1;
    for (let i of num) {
        res *= i;
    }
    console.log(`ex13: 1*2*3*4*5 = ${res}`)
}