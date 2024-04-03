// all the basic Operations just import the statement and use....
export function add(a: number, b: number) {
    return a + b;
}
export function sub(a: number, b: number) {
    return a - b;
}
export function mul(a: number, b: number) {
    return a * b;
}
export function div(a: number, b: number) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
export function Exponentiation(a: number, b: number) {
    return Math.pow(a, b);
}
export function SquareRoot(a: number) {
    return Math.sqrt(a);
}


