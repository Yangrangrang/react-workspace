import {useReducer, useCallback, useRef} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET':
            return action.initialForm
        default:
            throw new Error('Unhandled action');
    }
}

function useInputsReducer(initialForm) {
    const initialRef = useRef(initialForm);
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET',
            initialForm: initialRef.current // 저장된 초기값 전달
        });
    }, []);

    return [state, onChange, reset];
}

export default useInputsReducer;