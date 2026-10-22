const r1 = 10 && 20 && 30;
console.log(r1);
const r2 = 0 || 20 || 30;
console.log(r2);

const data = null;
const r3 = data ?? 20;
console.log(r3); // ??가 나오면 뒤의 값을 대입하라, null인 경우에만 사용한다.