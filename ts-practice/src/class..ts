interface User {
    name: string;
}

interface Product {
    id: string,
    price: number;
}

class Cart {
    // protected user: User;
    private store: { [key:string]: Product }

    constructor(public user: User) {
        this.user = user;
        this.store = {};
    }

    put(id:string, product: Product) {
        this.store[id] = product;
    }

    get(id:string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user
    }
}

const cart2 = new PromotionCart({name: 'jon'});
cart2.addPromotion();
cart2.put('1', {id:"1", price: 1000})
const cartJohn = new Cart({name: 'john'})
const cartJay = new Cart({name: 'jay'})

