export function ex17_2(num = 0) {
    console.log('ex17_2: ')
    sum(num);

    function sum(num) {
        let result = String(num).split('').map(Number).reduce((res, item) => res + item);
        num = result;
        if (result > 9)
            return sum(num);
        console.log(num);
    }
}