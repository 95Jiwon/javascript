// 2. 조건부 콜백 실행
// function checkAdult(name, age, adultCallback, minorCallback) {
//     // TODO: 나이가 20세 이상이면 adultCallback(name)을, 아니면 minorCallback(name)을 실행하세요.
// }
//
// // 테스트 코드
// checkAdult("철수", 25,
//     (name) => console.log(`${name}님은 성인입니다. 입장이 가능합니다!`),
//     (name) => console.log(`${name}님은 미성년자입니다. 보호자가 필요해요.`)
// );

function checkAdult(name, age, adultCallback, minorCallback) {
    if( age > 20) {
        adultCallback(name);
    }
    if(age < 20) {
        minorCallback(name);
    }
}

checkAdult("철수", 25,
    (name) => console.log(`${name}님은 성인입니다. 입장이 가능합니다!`),
    (name) => console.log(`${name}님은 미성년자입니다. 보호자가 필요해요.`)
);
