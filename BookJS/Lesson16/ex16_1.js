export function ex16_1(str = 'hello world') {
    let words = str.split(' ');
    let ucWords = [];

    for (const word of words) {
        ucWords.push(ucFirst(word));
    }
    console.log(`ex16_1: ${ucWords.join(' ')}`);
}

export function ucFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}