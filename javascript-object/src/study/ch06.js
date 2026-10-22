// 배열
let arr1 = new Array();
let arr2 = [];

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1.push(40);

arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2.push(40);

arr2 = [...arr2,...arr2, 50]; // ...을 추가해서 요소들을 복사한 후 새 배열에 추가하는걸 스프레드 문법이라고 한다.
console.log(arr1, arr2);

//스프레드 문법을 사용해서 for문을 사용해서 1부터 100까지 값이 들어가게 하라.
let result = [];

for (let i = 1; i <= 100; i++) {
    result = [...result, i];
}

console.log(result);