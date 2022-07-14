import {ucFirst} from "./ex16_1.js";
export function ex16_2(str = 'var_text_hello') {
    let words = str.split('_');
    let ucWords = [words[0]];

    for (let i = 1; i < words.length; i++) {
        ucWords.push(ucFirst(words[i]));
    }

    console.log(`ex16_2: ${ucWords.join('')}`);
}