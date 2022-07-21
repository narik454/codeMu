function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getAll(key) {
    return  JSON.parse(localStorage.getItem(key));
}

function get(key, id) {
    let json = localStorage.getItem(key);
    let arr = JSON.parse(json);

    return arr[id];
}

function set(key, id, newValue) {
    let arr = getAll(key);
    arr[id] = newValue;
    save(key, arr);
}

save('cities', ['Makh', 'Kasp', 'Khas']);

console.log(getAll('cities'));
set('cities', 2, 'Paris');
console.log(getAll('cities'));