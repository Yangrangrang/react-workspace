function merge<T1,T2>(a: T1, b: T2) {
    return {
        ...a,
        ...b
    };
}

const merged = merge({foo:1}, {bar: 2, footer: 3})

function wrap<T>(param: T) {
    return {
        param,
    };
}

const wrapped = wrap('10');

interface Items<T> {
    list: T[];
}

const items: Items<number> = {
    list: [1, 2, 3],
}

type TestItems<T, V> = {
    list: T[];
    value: V
}

const testItems: TestItems<string, string> = {
    list: ['1', '2'],
    value: "test",
}

console.log(items);
console.log(testItems);
