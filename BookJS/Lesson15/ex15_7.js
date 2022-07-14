export function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        num % i === 0 ? divisors.push(i) : null;
    }
    console.log(`ex15_7: ${divisors}`);
}