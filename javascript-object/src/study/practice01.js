// 1. 단순 콜백 호출하기
// function calculate(a, b, callback) {
//     // TODO: a와 b를 더한 값을 구한 뒤, 그 결과를 callback 함수의 인자로 전달해 실행하세요.
// }
//
//
// // 테스트 코드
// calculate(3, 5, function(result) {
//     console.log(`결과는 ${result}입니다`);
// });

function calculate(a, b, callback) {
    callback(a + b);
}

calculate(3, 5, function(result) {
    console.log(`결과는 ${result}입니다`);
})