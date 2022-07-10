export function ex14_7() {
    let arr =
        [
            [[1,2], [3,4]], [[5,6], [7,8]]
        ];
    let sum = arr.reduce((concatArr1, currentArr1) => {
        return concatArr1.concat(currentArr1);
    }).reduce((concatArr2, currentArr2) => {
        return concatArr2.concat(currentArr2);
    }).reduce((previousValue, currentValue) => {
        return previousValue += currentValue;
    });
    console.log(`ex14_7: ${arr} (sum)=> ${sum}`);
}