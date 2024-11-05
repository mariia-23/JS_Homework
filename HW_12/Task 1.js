
function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log('Функция вызвана через 2 секунды'));
const promiseResolved = new Promise((resolve) => {
    resolve(1);
});

promiseResolved.then(result => console.log(result));
const promiseRejected = new Promise((_, reject) => {
    reject("Promise failed");
});

promiseRejected.catch(error => console.error(error));
function promiseNumber(num) {
    return new Promise((resolve) => {
        resolve(num);
    });
}
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => {
        results.forEach(result => console.log(result));
    });
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => {
        results.forEach(result => console.log(result.status, result.value));
    });

async function handlePromisesAll() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach(result => console.log(result));
    } catch (error) {
        console.error(error);
    }
}

handlePromisesAll();


async function handlePromisesAllSettled() {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach(result => console.log(result.status, result.value));
}

handlePromisesAllSettled();
