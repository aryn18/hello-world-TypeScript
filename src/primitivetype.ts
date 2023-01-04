let sales = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// Any built-in type
let level;

// This is not true because of everytime we didn't declared a variable type any
function render(document: any){
    console.log(document)
}

// Arrays
let numbers: number[] = [1, 2, 3]; //true
let date = [23, 24, 26]; // true

// false because of we create any built in type
let no = [];
no[0] = 1;
no[1] = 'a';

numbers.forEach(n=>n.toFixed)

//Tuples: It is like a id and the value ex. id and name.
let user: [number, string] = [1, 'Aryan'];
let a: [number, boolean] = [20, true];
user.push(1);
user[0].toFixed;
user[1].length;

//Enums: list of related constants.
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size{Small = 1, Medium, Large};
let mySize: Size = Size.Large;
console.log(mySize);

//Functions

//way one
function calculateTax(income: number, taxYear?: number): number{
    if ((taxYear || 2022) < 2022)
        return income*1.2;
    return income *1.3;
}
calculateTax(10_000, 2022);


// way two
function calculateTaxx(income: number, taxYear = 2022): number{
    if (taxYear < 2022)
        return income*1.2;
    return income *1.3;
}
calculateTaxx(10_000, 2023);
console.log(calculateTaxx)

// Objects

let employee: {
    readonly id: number,
    name: string
    retire: (Date: Date) => void;
} = {id: 1, name: 'Aryan', retire: (Date: Date) =>{
    console.log(Date)
}};
