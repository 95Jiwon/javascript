

// 3. function processArray(arr, callback) {
//     // TODO: 반복문을 사용하여 배열의 각 요소를 순회하며 콜백 함수에 요소를 전달해 실행하세요.
// }
//
// // 테스트 코드
// processArray([1, 2, 3, 4], function(item) {
//     console.log(item * 2);
// });

function processArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

processArray([1, 2, 3, 4], function(item) {
    console.log(item*2);
});

function delayedMessage(message, seconds, callback) {
    // TODO: setTimeout을 사용하여 seconds(초) * 1000 alfflch enldp
    // message를 출력하고 콜백 함수를 실행하세요.
    console.log(message);
    setTimeout(() => callback(), seconds * 1000);
    console.log("여기 실행!!");
}

delayedMessage("안녕하세요!", 2, function (){
    console.log("콜백 함수가 실행 되었습니다!")
})

// // TODO: 1초당 한 개씩 출력되게끔 실행
// function call(num){
//     console.log(num);
// }
//
// for(let i = 0; i < 10; i++) {
//     console.log(`index: ${i}`);
//     setTimeout(function() { call(i + 1)}, (i +1) * 1000);
// }

function step1(callback) {
    function timeoutCallback() {
        console.log("1단계 완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

function step2(callback) {
    function timeoutCallback() {
        console.log("2단계 완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

function step3(callback) {
    function timeoutCallback() {
        console.log("3단계 완료");
        callback();
    }
    setTimeout(timeoutCallback, 2000);
}

step1(function(){
    step2(function(){
        step3(function(){
            console.log("마지막 콜백!");
        })
    })
})

//화살표 함수

function sum(a, b) {
    return a + b;
}

const sum2 = function (a, b) {
    return a +b;
}

const sum3 = (a, b) => { //function 대신 화살표 사용
    return a + b;
}

// 실행명령이 하나이면 중괄호 생략가능
const sum4 = (a, b) => a + b;
console.log(sum4(10, 20));

const sum5 = (a, b) => console.log(a, b);
sum5(20, 30);

//매개변수의 값이 1개면 괄호()도 생략 가능, 없거나 2개 부터는 불가능
const sum6 = a => console.log(a + a);
sum6(100);

setTimeout(() => {console.log("화살표함수 호출")}, 1000);
