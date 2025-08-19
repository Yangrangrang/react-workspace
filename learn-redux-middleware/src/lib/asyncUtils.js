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

const defaultIdSelector = param => param;
export const createPromiseThunkById = (type, promiseCreator, idSelector = defaultIdSelector) => {
    // idSelector : 함수타입으로 가져올 예정, 용도는 api를 호출 할 때, 사용하는 파라미터에서 id 를 어떻게 선택할지 정의해주는 함수

    const [SUCCEESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // Thunk 함수 생성
    return param => async dispatch => {
        const id = idSelector(param);
        dispatch({type, meta:id})
        try {
            const payload = await promiseCreator(param)
            dispatch({
                type: SUCCEESS,
                payload,
                meta:id
            });
        } catch (e) {
            dispatch({
                type: ERROR,
                payload: e,
                error: true,
                meta:id
            })
        }
    }
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

export const handleAsyncActionsById = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    const reducer = (state, action) => {
        const id = action.meta;
        switch (action.type) {
            case type:
                return {
                    ...state,
                    // keepData -> 기존의 상태를 로딩할때도 유지하겠다.
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(keepData ? state[key][id] && state[key][id].data : null)
                    },
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id] : reducerUtils.success(action.payload),
                    }
                }
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id] : reducerUtils.error(action.payload),
                    }
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