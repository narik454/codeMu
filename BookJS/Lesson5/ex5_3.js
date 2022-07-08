export function ex5_3() {
    let max = 100;
    let arr = [];
    for (let i = 0; i <= max; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    console.log(`ex5_3: Even: ${arr}`);
}