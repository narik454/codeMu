export function ex7_14() {
    let str = 'var_test_text';
    let strArr = str.split('_');
    let splitArr = [];
    let res = [];
    for (let i = 1; i < strArr.length; i++) {
        splitArr = strArr[i].split('');
        let first = splitArr[0].toUpperCase();
        splitArr.splice(0, 1);
        res[i - 1] = [first, ...splitArr].join('');
    }
    console.log(`ex7_14: ${str} => ${strArr[0] + res.join('')}`)
}