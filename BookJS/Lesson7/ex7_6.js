export function ex7_6(n = 20) {
    let str = 'kakaya-to stroka';
    let result;
    if (str.length > n){
        result = str.slice(0, n+1);
        console.log(`ex7_6: ${result}...`)
    } else {
        result = str;
        console.log(`ex7_6: ${result}`)
    }
}