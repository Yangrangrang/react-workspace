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