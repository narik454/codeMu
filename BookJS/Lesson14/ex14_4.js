export function ex14_4() {
    let arr = [2,4,1,3,3,4,5,6,1,3,5];
    let sum = 0;
    let i;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum >= 10)
            break;
    }


    console.log(`ex14_4: ${arr} => ${i+1}`);
}