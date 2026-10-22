// 객체

class Student {
    name;
    age;
}

const s1 = new Student();
console.log(s1);

const s2 = {
    name: undefined,
    age: undefined,
}

console.log(s2); // class명이 붙나 안붙나 차이가 있다.

class Teacher {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const t1 = new Teacher("황지원", 32);
console.log(t1);

const t2 = {
    name: "황지원",
    age: 32,

}

console.log(t2.name);

//참조 방법
console.log(t2["name"]); //보통 []를 열면 배열인데 자바 스크립트에서는 참조도 가능하다.
const key = "name";
console.log(t2[key]);
t2["address"] = "부산 북구";
console.log(t2);

const t3 = {
    ...t2,
    gender: "남",
};

console.log(t3);

/*
const students = [
    <div>
        <div>이름: 황지원</div>
        <div>나이: 32</div>
    </div>
    <div>
        <div>이름: 황지투</div>
        <div>나이: 33</div>
    </div>
    {
        name: ="황지원",
        age: = 32,
    },
]
 */

