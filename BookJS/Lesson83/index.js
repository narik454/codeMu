/* Даны 3 картинки. С помощью Promise.all дождитесь окончания загрузки всех картинок и выведите их на экран. */

function loadImage(path) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = path;

        image.onload = () => resolve(image);
        image.onerror = () => reject(path);
    });
}

let images = [
    'https://klike.net/uploads/posts/2019-09/1568528357_1.jpg',
    'https://vjoy.cc/wp-content/uploads/2019/12/3dr-19.jpg',
    'https://www.zastavki.com/pictures/originals/2012/Nature_Flowers_Big_flowers_of_a_sunflower_036583_.jpg',
    'https://s1.1zoom.me/big3/533/341916-alexfas01.jpg',
    'http://imagebank.biz/wp-content/uploads/2014/08/170515.jpg',
    'https://zamanilka.ru/wp-content/uploads/2019/03/5120x2880-UHD.jpg',
    'http://w4.wallls.com/uploads/original/201602/23/wallls.com_84581.jpg'
]

Promise.all(images.map(loadImage)).then(
    images => {
        for (let image of images) {
            document.body.appendChild(image);
        }
    }
).catch(error => console.log(error));