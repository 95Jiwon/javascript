let students = [
    {
        name: "황지원",
        age: 32,

    },
    {
        name: "황지투",
        age: 33,
    },
]

students = [
    ...students,
    {
        name: "황지삼",
        age: 34,
    },
]

function mapFx(data) {
    return `
    <div>
        <div>이름: 황지원 ${data.name}</div>
        <div>나이: 32 ${data.age}</div>
    </div>
    `
}

const domStudents = students.map(mapFx)
console.log(domStudents);