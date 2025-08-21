interface TV {
    trunOn():boolean;
    trunOff():void;
}

const myTv: TV = {
    trunOn() {
        return true;
    },
    trunOff() {

    }
}

const v = myTv.trunOn();
console.log(v);