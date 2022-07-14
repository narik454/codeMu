import {getDigitsSum} from "./ex15_3.js";
export function ex15_4() {
    let date = new Date();
    let currentYear = date.getFullYear();
    let yearsArr = [];
    for (let i = 1; i <= currentYear; i++) {
        getDigitsSum(i) === 13 ? yearsArr.push(i): null;
    }
    console.log(`ex15_4: ${yearsArr}`);
}