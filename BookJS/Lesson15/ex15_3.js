export function getDigitsSum(num) {
    return String(num).split('').reduce((sum, digit) => sum = parseInt(sum) + parseInt(digit));
}