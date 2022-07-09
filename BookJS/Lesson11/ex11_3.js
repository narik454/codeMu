export function ex11_3() {
    let str = [2,3,1,1,2,4,];
    let isEqual;
    str.reduce((previousValue, currentValue) => {
        if (previousValue === currentValue)
            isEqual = true;
        return currentValue;
    });
    console.log(`ex11_3: ${str} => ${isEqual ? 'YES' : 'NO'}`);
}