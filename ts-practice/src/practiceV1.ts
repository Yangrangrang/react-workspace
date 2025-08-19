let count = 0;
count += 1;

const message: string = 'hello world';
const done: boolean = false;

const number: number[] = [1, 2, 3,];
const messages: string[] = ['hello', 'world'];

let mightBeUndefined: String | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' = 'red';
color = 'orange';

function sum(x: number, y: number): number {
    return x + y;
}

sum(1, 2);
console.log(typeof sum(1, 2));

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc,current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5, 6]);
console.log(total);


function returnNothing(): string | number {
    console.log("test");
    return 4;
}

returnNothing();

interface Shape{
    getArea(): number;
}

class Circle implements Shape {

    constructor(public radius: number) {}

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes : Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

type Person = {
    name: string,
    age?: number;
}

interface Developer extends Person{
    age?: number;
    skills: string[];
}


const person: Person = {
    name: 'han',
    age: 20
};

const expert: Developer = {
    name: "test",
    skills: ['java', 'ts'],
}


