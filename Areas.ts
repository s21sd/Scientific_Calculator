// All the Areas Functions will go here just import the statement and use....

// All the Areas Functions

const PI = Math.PI;

// Calculating the square perimeter
export function squarePerimeter(a: number, unit: string = ""): string {
    return `${4 * a} ${unit}`;
}

// Calculating square area
export function squareArea(a: number, unit: string = ""): string {
    return `${a * a} ${unit}*${unit}`;
}

// Calculating rectangle perimeter
export function rectanglePerimeter(a: number, b: number, unit: string = ""): string {
    return `${2 * (a + b)} ${unit}`;
}

// Calculating parallelogram perimeter
export function parallelogramPerimeter(a: number, b: number, unit: string = ""): string {
    return `${2 * (a + b)} ${unit}`;
}

// Calculating rectangle area
export function rectangleArea(a: number, b: number, unit: string = ""): string {
    return `${a * b} ${unit}*${unit}`;
}

// Calculating parallelogram area
export function parallelogramArea(b: number, h: number, unit: string = ""): string {
    return `${b * h} ${unit}*${unit}`;
}

// Calculating circle area
export function circleArea(r: number, unit: string = ""): string {
    return `${PI * r * r} ${unit}*${unit}`;
}

// Calculating triangle perimeter
export function trianglePerimeter(a: number, b: number, c: number, unit: string = ""): string {
    return `${a + b + c} ${unit}`;
}

// Calculating triangle area
export function triangleArea(b: number, h: number, unit: string = ""): string {
    return `${0.5 * b * h} ${unit}*${unit}`;
}

// Calculating trapezoid perimeter
export function trapezoidPerimeter(a: number, b1: number, b2: number, unit: string = ""): string {
    return `${a + b1 + b2} ${unit}`;
}

// Calculating trapezoid area
export function trapezoidArea(h: number, b1: number, b2: number, unit: string = ""): string {
    return `${0.5 * (b1 + b2) * h} ${unit}*${unit}`;
}
