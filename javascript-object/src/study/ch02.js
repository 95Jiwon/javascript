function main() {
    console.log("메인함수 호출");
    let student = {// let = 변수
        name: "황지원",
        age: 33, //자바에서는 끝 문법에 ,가 안되는데 자바스크립트에서는 가능하다.
        address: [
            "부산시",
            "북구",
            "화명동",
        ],
    };
    console.log(student);

    let student2 = 0/0; //데이터를 대입 할 때 그 데이터의 타입에 따라 생성된다.
    console.log(typeof student2); // typeof " " == " " 안의 타입은? 이라고 묻는 문법이다.

    const PI = 3.14;                   // 상수, 변하지 않는 값
}

main();