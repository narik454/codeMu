export function ex14_5() {
    let arr = [1,2,3,4,5,6];
    let revArr = [];
    let i = arr.length - 1;

    arr.forEach((value) => {
        revArr[i] = value;
        i--;
    });

    console.log(`ex14_5: ${arr} => ${revArr}`);
}