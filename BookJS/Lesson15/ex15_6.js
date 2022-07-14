import {isEven} from "./ex15_5.js";
export function ex15_6() {
    let nums = [2,5,1,6,7,3,2,55,54];
    let evenNums = nums.filter(value => isEven(value));
    console.log(`ex15_6: ${nums} (even)=> ${evenNums}`);
}