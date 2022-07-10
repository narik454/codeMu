export function ex14_6() {
    let arr =
        [
            [1,2,3],
            [4,5],
            [6]
        ];
    let sum = arr.reduce((concatArr, currentArr) => {
        return concatArr.concat(currentArr);
    }).reduce((previousValue, currentValue) => {
       return previousValue += currentValue;
    });
    console.log(`ex14_6: ${arr} (sum)=> ${sum}`);
}