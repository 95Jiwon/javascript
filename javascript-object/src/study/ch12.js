
console.log('1');
setTimeout(() => console.log('2'), 1000);
//callback 우리가 전달할 함수를 나중에 전달받는 문법이다.
//()가 나와 호출이 되면 동작이 끝나고 다음 동작으로 이어진다. { } 안에 넣어둔 함수가 호출 되게끔 Set 한 것이다.
//settimeout안의 하나의 파라미터로 지정되어 실행 된다.
console.log('3');
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printImmediately(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            }else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

//1. 사용자에게 ID와 password를 받아 올 것
//2. login이 성공적으로 되었다면 받아온 id를 이용해서 roles 역할을 다시 요청해서 받아온다.
//3. 역할이 성공적으로 받아와지면 역할에 들어있는 값을 출력한다.

const userStorage = new UserStorage();
const id = prompt('ellie');
const password = prompt('1234');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${user.name}, you have a ${user.role} role`);
            },
            error => {
            }
        );
    },
    error => {
        console.log(error)
    }
);