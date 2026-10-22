// new Promise(() => {
//     console.log(1);
// });
//
// new Promise(() => {
//   console.log(2);
// });
//
// new Promise(() => {
//     console.log(3);
// });
//
// new Promise(() => {
//     console.log(4);
// });
//
// new Promise((resolve) => {
//   console.log(5);
//   resolve(6);
// }).then(r => console.log(r));
//
// new Promise((resolve) => {
//     console.log(7);
//     resolve(8);
// }).then(r => console.log(r));
//
// new Promise((resolve) => {
//     console.log(9);
//     resolve(10);
// }).then(r => {
//     console.log(r);
//     return 11;
// }).then(r => {
//     console.log(r);
//     return 12;
// })
//
// new Promise((resolve, reject) => {
//         console.log(13);
//         reject(14);
//     }).catch(r => {
//         console.log(r);
//         throw 15;
//     }).catch(r => {
//         console.log(r);
//         throw 16;
//     }).catch(r => {
//         console.log(r);
// })
//
// new Promise((resolve, reject) => {
//     console.log(17);
//     reject(18);
// }).catch(r => {
//     console.log(r);
//     throw 19;
// }).catch(r => {
//     console.log(r);
//     throw 20;
// }).catch(r => {
//     console.log(r);
// });

function getUserOfController(username) {
    console.log("서버에서 사용자 정보 요청 받음");
    const response = {
        status: 200,
        data: {
            username: username,
            password: "1q2w3e4r",
            name: "황지원",
            email: "test@gmail.com",
        },

        requestAddress: "192.168.0.100",
        requestHeader: "https-only",
        //response안에 다양한 정보가 있다.
    }

    if(!(username ?? "").trim()) {
        return { // MAP의 특성 상 키값이 동일하면 덮어 써버린다. + 리턴 안의 값만 변화된다.
            ...response,
            status: 400,
            data: {
                message: "사용자 정보를 확인하세요.",
            }
        }
    }

    return response;
}

function getUser(username) {
    console.log("서버에서 사용자 정보 요청");
    return new Promise((resolve, reject) =>{
        const response = getUserOfController(username);
        if (response.stats !== 200) {
            reject(response.data);
            return;
        }
        resolve(response);
    });
}

console.log("전체 렌더링 시작");
getUser("r").then(responseData => {
    console.log(responseData);
    }).catch(error => {
        console.log(error);
    }
);
console.log("다른 요청2");
console.log("다른 요청3");
console.log("전체 렌더링 종료");