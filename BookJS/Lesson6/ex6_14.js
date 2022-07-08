export function ex6_14(n = 1) {
    function factorial(n) {
        return (n !== 1) ? n * factorial(n - 1) : 1;
    }

    console.log(`ex6_14: ${n}! = ${factorial(n)}`);
}