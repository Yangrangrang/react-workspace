import React from "react";
import Counter from "../components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {increase, decrease, increaseBy} from "../modules/counter";

export default function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <Counter
                count={count}
                onIncrease={() => dispatch(increase())}
                onDecrease={() => dispatch(decrease())}
                onIncreaseBy={(amount: number) => dispatch(increaseBy(amount))}
            />
        </>
    )
};