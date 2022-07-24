let promise = new Promise((resolve, reject) => {
    console.log('1');

    setTimeout(() => {
        reject('error');
    }, 3000);
});

promise
    .then(
        result => {
            console.log('2');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(result + '!');
                }, 2000);
            });
        },
        error => {
            console.log('error2');
            throw new Error('ERRRRROOORRRRR!!!');
        }
    ).then(
        result => {
            console.log('3');

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(result + '?');
                }, 1000);
            });
        }
    ).then(
        result => {
            console.log(result);
        }
    ).catch(
        error => {
            console.log(error.message);
        }
    )