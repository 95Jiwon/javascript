// async / await

async function getUserById(id) {
     // Promise 이후에 매개변수명이여서 어떤 이름을 써도 상관이 없다.
       const users = [
           {id: 1, username: "user1"},
           {id: 2, username: "user2"},
           {id: 3, username: "user3"},
       ];
       const foundUser = users.find(user => user.id === id) //find는 하나만 찾는다 여러 개를 뽑아 낼려면 filter를 사용한다.
        if(!foundUser) {
            throw new Error("id와 일치하는 사용자가 존재하지 않습니다.");
        }
        return foundUser;
}

async function getPostsByUsername(username) {
        const posts = [
            {id: 1, content: "내용1", username: "user1"},
            {id: 2, content: "내용2", username: "user2"},
            {id: 3, content: "내용3", username: "user1"},
            {id: 4, content: "내용4", username: "user2"},
            {id: 5, content: "내용5", username: "user1"},
        ];
        const foundPosts = posts.filter(post => post.username === username);
        if(!foundPosts.length) {
            throw new Error("해당 username으로 검색된 게시글이 없습니다.");
        }
        return foundPosts;
}

function asyncFx2() {
    return new Promise((rs, rj) =>{

    });
}

async function asyncFx(){

}

async function run() {
    try {
        let value = await new Promise((rs, rj) => { //async안에서만 await을 쓸 수 있다
            // rj(100)
        });
        console.log(value); //then의 매개변수로 들어와야 할 것을 바로 리턴해준다.
        let username = await getUserById(1); // await은 new promise앞에서만 붙일 수 있다.
        console.log(await getPostsByUsername(foundUser.username));
        } catch (error) {
        console.log(error);
    }
}

run();