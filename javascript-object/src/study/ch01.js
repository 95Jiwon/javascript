console.log("출력!!");
console.log("출력!!");
console.log(0/0);
console.log("출력!!");

let name = "황지원";
console.log(name);
name = 123;
console.log(name); //Typeless 자료형이 없다.
name = [1,2,3,4,5,6,7]
console.log(name);
name = {
    "a" : [1,2,3,4],
    "b" : "황지원",
    "c" : 1234
};
console.log(name);
console.log(name["b"]);
console.log(name.c);

let data = [
    {
        "class1" : {
            student1: {
                id: 1,
                object: {
                    name: "황지원",
                    address: "서울"
                },
                createdAt: new Date("2026-10-19")
            },
            student2: {
                id: 2,
                object: {
                    name: "황지투",
                    address: "부산"
                },
                createdAt: new Date("2026-10-20")
            }
        }
    },
    {
        "class2" : {
            student1: {
                id: 1,
                object: {
                    name: "황지원",
                    address: "부산"
                },
                createdAt: new Date("2026-10-19")
            },
            student2: {
                id: 2,
                object: {
                    name: "황지투",
                    address: "부산"
                },
                createdAt: new Date("2026-10-20")
            }
        }
    }
]

console.log(JSON.stringify(data));

console.log(data[1].class2.student2.object.name);