export function ex15() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(`ex15: Time: ${hour}:${minute}:${second}`);
}