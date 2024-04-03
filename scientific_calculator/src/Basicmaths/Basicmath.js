// all the basic Operations just import the statement and use....
export function add(a, b) {
    return a + b;
}
export function sub(a, b) {
    return a - b;
}
export function mul(a, b) {
    return a * b;
}
export function div(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
export function Exponentiation(a, b) {
    return Math.pow(a, b);
}
export function SquareRoot(a) {
    return Math.sqrt(a);
}
