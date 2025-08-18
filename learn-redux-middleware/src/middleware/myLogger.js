const myLogger = store => next => action => {
    console.log(action);    // action이 dispatch 될때, console에 출력
    console.log('\tPrev: ', store.getState());
    const result = next(action);
    // action 을 다음 미들웨어에게 전달,
    // 만약 다음 미들웨어가 없다면 리듀서에 전달
    console.log('\tNext: ', store.getState());
    return result;  // 결과물
}

export default myLogger;