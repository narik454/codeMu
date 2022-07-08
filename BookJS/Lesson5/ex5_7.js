export function ex5_7() {
    let obj = {green: 'GREEN', red: 'RED', blue: 'BLUE'};
    console.log('ex5_7:')
    for (const key in obj) {
        console.log(`   obj[keys]: ${key}, obj[values]: ${obj[key]}`);
    }
}