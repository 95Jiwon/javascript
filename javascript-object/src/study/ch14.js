// async / await

function getUserById(id) {
    return new Promise((rs, rj) => { // Promise 이후에 매개변수명이여서 어떤 이름을 써도 상관이 없다.
       const users = [
           {id: 1, username: "user1"},
           {id: 2, username: "user2"},
           {id: 3, username: "user3"},
       ];
       const foundUser = users.find(user => user.id === id) //find는 하나만 찾는다 여러 개를 뽑아 낼려면 filter를 사용한다.
        if(!foundUser) {
            rj(new Error("id와 일치하는 사용자가 존재하지 않습니다."));
            return;
        }
        rs(foundUser);
    });
}

function getPostsByUsername(username) {
    return new Promise((rs, rj) => {
        const posts = [
            {id: 1, content: "내용1", username: "user1"},
            {id: 2, content: "내용2", username: "user2"},
            {id: 3, content: "내용3", username: "user1"},
            {id: 4, content: "내용4", username: "user2"},
            {id: 5, content: "내용5", username: "user1"},
        ];
        const foundPosts = posts.filter(post => post.username === username);
        if(!foundPosts.length) {
            rj(new Error("해당 username으로 검색된 게시글이 없습니다."));
            return;
        }
        rs(foundPosts);
    });
}

let username = null;

getUserById(2)
    .then(foundUser => {
        username = foundUser.username;
        getPostsByUsername(username)
            .then(foundPosts => {
                console.log(foundPosts);
            })
            .catch(console.log);
    })
    .catch(console.log);