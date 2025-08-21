interface User {
    name: string
}
interface Action {
    do(): void;
}

function createUserAction(u: User, a: Action): User & Action {
    return {...u, ...a};
}

const u = createUserAction({name: 'jay'}, {
    do() {
        console.log("do");
    }
});

u.do();

function compare(x: string | number, y: string | number) {
    console.log(typeof x);
    console.log(typeof y);
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }

}

compare(1, 2);
compare("1", "2");
compare(1, "1");

// 타입 가드
function isAction(v: User | Action): v is Action {
    return typeof (v as Action).do === "function";
}

function process(v: User | Action) {
    if (isAction(v)) {
        v.do();
    } else {
        v.name;
    }
}

process({name: 'han'});