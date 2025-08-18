import React from "react";
import {bindActionCreators} from "redux";
import Counter from "../components/Counter";
import {connect} from "react-redux";
import {increase, decrease, setDiff} from "../modules/counterSlice";

function CounterContainer({
    number,
    diff,
    // onIncrease,
    // onDecrease,
    // onSetDiff
    increase,
    decrease,
    setDiff
}) {
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
}

const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff
})

// const mapDispatchToProps = dispatch =>
// //     ({
// //     onIncrease: () => dispatch(increase()),
// //     onDecrease: () => dispatch(decrease()),
// //     onSetDiff: (diff) => dispatch(setDiff(diff))
// // })
// bindActionCreators({
//     increase,
//     decrease,
//     setDiff,
// }, dispatch)

// 객체로 만들면 bindActionCreators 자동으로됨.
const mapDispatchToProps = {
    increase,
    decrease,
    setDiff,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);