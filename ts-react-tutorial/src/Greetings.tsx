import React from "react";

type GreetingsProps = {
    name?: string;
    onClick: (name: string) => void;
    children?: React.ReactNode;
};

// React.FC 장점은 props 에서 children 을 따로 작성하지 않아도 자동으로 탑재
// const Greetings: React.FC<GreetingsProps> = ({name= '테스트'}) => {
//     return <div>Hello, {name}</div>
// }

function Greetings ({name = "g" , onClick , children} : GreetingsProps){
    const handleClick = () => onClick(name);
    return (
        <>
            <div>
                Hello, {name}
            </div>
            <button onClick={handleClick}>btn</button>
        </>
    );

}

export default Greetings;