// all the Volumes are here! just import the statement and use....

// Volume.js

const PI = Math.PI;

// Calculate sphere surface area
export function sphereSurfaceArea(r: number, unit: string = ""): string {
    return `${4 * PI * r * r} ${unit}*${unit}`;
}

// Calculate sphere volume
export function sphereVolume(r: number, unit: string = ""): string {
    return `${(4 / 3) * PI * r * r * r} ${unit}*${unit}*${unit}`;
}

// Calculate cube surface area
export function cubeSurfaceArea(a: number, unit: string = ""): string {
    return `${6 * a * a} ${unit}*${unit}`;
}

// Calculate cube volume
export function cubeVolume(a: number, unit: string = ""): string {
    return `${a * a * a} ${unit}*${unit}*${unit}`;
}

// Calculate rectangular prism surface area
export function rectangularPrismSurfaceArea(a: number, b: number, c: number, unit: string = ""): string {
    return `${2 * (a * b + b * c + c * a)} ${unit}*${unit}`;
}

// Calculate rectangular prism volume
export function rectangularPrismVolume(a: number, b: number, c: number, unit: string = ""): string {
    return `${a * b * c} ${unit}*${unit}*${unit}`;
}

// Calculate cylinder surface area
export function cylinderSurfaceArea(r: number, h: number, unit: string = ""): string {
    return `${2 * PI * r * (r + h)} ${unit}*${unit}`;
}

// Calculate cylinder volume
export function cylinderVolume(r: number, h: number, unit: string = ""): string {
    return `${PI * r * r * h} ${unit}*${unit}*${unit}`;
}

// Calculate cone surface area
export function coneSurfaceArea(r: number, h: number, l: number, unit: string = ""): string {
    return `${PI * r * (r + l)} ${unit}*${unit}`;
}

// Calculate cone volume
export function coneVolume(r: number, h: number, unit: string = ""): string {
    return `${(1 / 3) * PI * r * r * h} ${unit}*${unit}*${unit}`;
}
