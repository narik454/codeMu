export function ex17_1() {
    const arr = [2,5,1,6,7];
    console.log('ex17_1: ')
    arrItems(arr);
    function arrItems(arr) {
        console.log(`${arr[0]}`);
        arr.splice(0, 1);
        if (arr.length > 0)
            arrItems(arr);
    }
}