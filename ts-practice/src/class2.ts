interface Person {
    name: string,
    say(message: string):void;
}

interface Programmer {
    writeCode(requirment: string): string;
}

class KoreanProgrammer implements Person, Programmer {
    constructor(public name: string) {

    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + "....";
    }

    loveKimchi() {
        console.log("kimchi");
    }
}

const jay = new KoreanProgrammer("jay");
jay.say("hi");
jay.writeCode("test");
jay.loveKimchi();

