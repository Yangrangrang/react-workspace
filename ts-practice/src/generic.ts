interface Veigtable {
    v: string,
}

interface Meat {
    m: string
}

interface Cart2<T> {
    getItem(): T extends Veigtable ? Veigtable : Meat;
    test(): void;
}

const cart1 : Cart2<Veigtable> = {
    getItem(): Veigtable {
        return {
            v: '',
        }
    },
    test() {
        console.log("Test")
    }
}

cart1.getItem();