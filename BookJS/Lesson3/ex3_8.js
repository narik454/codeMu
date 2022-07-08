export function ex3_8() {
    let day = new Date();
    let days = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'};
    console.log(`ex2_8: Today is ${days[day.getDay()]}`);
}