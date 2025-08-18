const sleep = n => new Promise(resolve => setTimeout(resolve, n));
// sleep 이라는 함수를 만들어서 1초뒤에 끝나는 promise 를 만들었다.

// 가짜 post 목록 데이터
// {id, title, body}
const posts = [
    {
        id:1,
        title: 'test1',
        body: 'bodyTest1'
    },
    {
        id:2,
        title: 'test2',
        body: 'redux-thunk2'
    },
    {
        id:3,
        title: 'test3',
        body: 'redux-saga3'
    },
]

export const getPosts = async () => {
    // 함수가 호출되면 일단 0.5초 동안 쉰다.
    await sleep(500);
    // 0.5초가 흐른다음에 posts 를 반환
    return posts;
}
// getPosts 를 호출하면 하나의 promise 가 생성되고,
// promise 에서는 0.5초가 흐른 후에 posts 를 보여준다.

export const getPostById = async id => {
    await sleep(500);
    // 0.5초가 흐른후에 post id 가 파라미터로 받아온 id 값과 일치하는 post 하나를 찾아서 반환
    return posts.find(post => post.id === id)
}