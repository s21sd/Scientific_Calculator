// All the Areas Functions will go here just import the statement and use....
// All the Areas Functions
const PI = Math.PI;
// Calculating the square perimeter
export function squarePerimeter(a, unit = "") {
    return `${4 * a} ${unit}`;
}
// Calculating square area
export function squareArea(a, unit = "") {
    return `${a * a} ${unit}*${unit}`;
}
// Calculating rectangle perimeter
export function rectanglePerimeter(a, b, unit = "") {
    return `${2 * (a + b)} ${unit}`;
}
// Calculating parallelogram perimeter
export function parallelogramPerimeter(a, b, unit = "") {
    return `${2 * (a + b)} ${unit}`;
}
// Calculating rectangle area
export function rectangleArea(a, b, unit = "") {
    return `${a * b} ${unit}*${unit}`;
}
// Calculating parallelogram area
export function parallelogramArea(b, h, unit = "") {
    return `${b * h} ${unit}*${unit}`;
}
// Calculating circle area
export function circleArea(r, unit = "") {
    return `${PI * r * r} ${unit}*${unit}`;
}
// Calculating triangle perimeter
export function trianglePerimeter(a, b, c, unit = "") {
    return `${a + b + c} ${unit}`;
}
// Calculating triangle area
export function triangleArea(b, h, unit = "") {
    return `${0.5 * b * h} ${unit}*${unit}`;
}
// Calculating trapezoid perimeter
export function trapezoidPerimeter(a, b1, b2, unit = "") {
    return `${a + b1 + b2} ${unit}`;
}
// Calculating trapezoid area
export function trapezoidArea(h, b1, b2, unit = "") {
    return `${0.5 * (b1 + b2) * h} ${unit}*${unit}`;
}
