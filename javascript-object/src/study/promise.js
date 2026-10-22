// 1. state: 상태
// 2. P vs C (promise, Client)

// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// 새로운 Promise가 만들어질때 executor가 작동한다.
const promise = new Promise((resolve, reject) => {
   //무거운 일 처리 (network, read files)
   console.log('doing something...');
   setTimeout(() => {
       resolve('ellie');
       reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
        console.log('finally');
});

 // 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(getEgg)
    .catch(error => {
    return '🥖';
})
.then(getEgg)
.then(cook)
.then(console.log)
.catch(console.log);