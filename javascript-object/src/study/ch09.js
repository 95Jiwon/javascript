//함수
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

const add2 = function(a, b) {
    return a + b;
} //자바스크립트에서는 함수를 값으로 본다.



console.log(add2(30, 40));

console.log(function add3(a, b) {return a + b;});

const add4 = function add5(a, b) {return a + b; };

console.log(add4);
console.log(add4(100, 200));
// 함수의 주소값 + () ===> 호출로 볼 수 있다.
console.log(function(a, b) {return a + b}(500, 1000));

//콜백(CallBack) 함수 *매우 중요*
function a1() {
    console.log("a1 함수 호출");
}
function a2() {
    console.log("a2 함수 호출");
}
function b(callBackA) {
        callBackA();
        console.log("b 함수 호출");
}

b(a1);
b(a2);