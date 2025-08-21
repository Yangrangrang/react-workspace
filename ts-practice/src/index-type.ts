interface Props {
    name: string;
    [key: string]: string;
}

const p: Props = {
    name: 'test',
    a: 'b',
    b: 'c',
    c: '2',
    1: 'd',
    3: 'g',
};

let keys: keyof Props;

console.log(p[2]);

interface User {
    name: string,
    age: number,

    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age";

let helloMethod = User["hello"]