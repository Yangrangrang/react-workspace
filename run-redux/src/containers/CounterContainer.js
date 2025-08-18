import React from "react";
import Counter from "../components/Counter";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {increase, decrease, setDiff} from "../modules/counterSlice";

function CounterContainer() {
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }),
    // (left, right) => {
    //     return left.diff === right.diff && left.number === right.number;
    // }
    shallowEqual
    );
    // 이전 상태와 다음 상태를 비교하는 함수

    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);
    console.log(number, diff);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };
    const onDecrease = () => {
        dispatch(decrease());
    }
    const onSetDiff = diff => {
        dispatch(setDiff(diff));
    }

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;