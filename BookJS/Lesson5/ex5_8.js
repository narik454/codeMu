export function ex5_8() {
    let obj = {
        John: '1000',
        Smith: '2000',
        Jolie: '5000'
    };
    console.log('ex5_8:')
    for (const key in obj) {
        console.log(`   ${key} - salary $${obj[key]}`);
    }
}