export const createPromiseThunk = (type, promiseCreator) => {
    // type: 요청을 시작했음을 알려주는 타입
    // promiseCreator : 프로미스를 만들어주는 함수

    // type 에 성공인지 에러인지 붙혀주는 작업 (액션 타입)
    const [SUCCEESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // Thunk 함수 생성
    const thunkCreator = param => async dispatch => {
        dispatch({type})
        try {
            const payload = await promiseCreator(param)
            dispatch({
                type: SUCCEESS,
                payload
            });
        } catch (e) {
            dispatch({
                type: ERROR,
                payload: e,
                error: true
            })
        }
    }

    return thunkCreator; // (그냥 return 으로 해도 됨)
}

// 리듀서에 있는 코드를 간단히 작성하기 위해
export const handleAsyncActions = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    // 3가지 액션들의 대한 리듀서 생성
    const reducer = (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    // keepData -> 기존의 상태를 로딩할때도 유지하겠다.
                    [key]: reducerUtils.loading(keepData ? state[key].data : null),
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                }
            default:
                return state;
        }
    }
    return reducer;
}

export const reducerUtils = {
    initial : (initialDate = null) => ({
        initialDate,
        loading: false,
        error: null
    }),
    loading: (prevState = null) => ({
        // prevState:  상황에 따라 각각의 값만 바꾸고 싶고, 기본값은 유지하고 싶을 때를 위한
        data: prevState,
        loading: true,
        error: null
    }),
    success: data => ({
        data,
        loading: false,
        error: null
    }),
    error: error => ({
        data: null,
        loading: false,
        error,
    })
}