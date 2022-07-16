class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        let arr = str.split('');
        let strEnd = arr.splice(1).join('');
        return arr[0].toUpperCase() + strEnd.toLowerCase();
    }

    ucWords(str) {
        let words = str.split(' ');
        let ucWords = [];
        for (let word of words) {
            ucWords.push(this.ucFirst(word));
        }
        return ucWords.join(' ');
    }
}

let str = new MyString();

console.log(str.reverse('123456'));
console.log(str.ucFirst('nariMAn'));
console.log(str.ucWords('dfdjFDSA skjdfDSAg sdkjuDSAFgfh'));