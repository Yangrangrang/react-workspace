import React, { Component } from 'react';

class CounterClass extends Component {

    // constructor(props) {
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = {  // state 는 무조건 객체여야함.
    //         counter: 0,
    //     };
    // }

    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe:1
        }
    }

    // handleIncrease() {
    handleIncrease = () => {
        console.log(this);
        // 메서드와 컴포넌트의 관계가 끊김. (생성자, 화살표 함수로 해결 가능)
        console.log("increase");
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        this.setState(state => ({
            counter: state.counter + 1,
        }))
    }

    handleDecrease = () => {
        console.log(this);
        console.log("decrease");
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe, // 객체의 경우 덮어씌워주는 형태로 작성해야함.
                toggleMe : !this.state.updateMe.toggleMe
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default CounterClass;