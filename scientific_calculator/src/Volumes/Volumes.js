// all the Volumes are here! just import the statement and use....
// Volume.js
const PI = Math.PI;
// Calculate sphere surface area
export function sphereSurfaceArea(r, unit = "") {
    return `${4 * PI * r * r} ${unit}*${unit}`;
}
// Calculate sphere volume
export function sphereVolume(r, unit = "") {
    return `${(4 / 3) * PI * r * r * r} ${unit}*${unit}*${unit}`;
}
// Calculate cube surface area
export function cubeSurfaceArea(a, unit = "") {
    return `${6 * a * a} ${unit}*${unit}`;
}
// Calculate cube volume
export function cubeVolume(a, unit = "") {
    return `${a * a * a} ${unit}*${unit}*${unit}`;
}
// Calculate rectangular prism surface area
export function rectangularPrismSurfaceArea(a, b, c, unit = "") {
    return `${2 * (a * b + b * c + c * a)} ${unit}*${unit}`;
}
// Calculate rectangular prism volume
export function rectangularPrismVolume(a, b, c, unit = "") {
    return `${a * b * c} ${unit}*${unit}*${unit}`;
}
// Calculate cylinder surface area
export function cylinderSurfaceArea(r, h, unit = "") {
    return `${2 * PI * r * (r + h)} ${unit}*${unit}`;
}
// Calculate cylinder volume
export function cylinderVolume(r, h, unit = "") {
    return `${PI * r * r * h} ${unit}*${unit}*${unit}`;
}
// Calculate cone surface area
export function coneSurfaceArea(r, h, l, unit = "") {
    return `${PI * r * (r + l)} ${unit}*${unit}`;
}
// Calculate cone volume
export function coneVolume(r, h, unit = "") {
    return `${(1 / 3) * PI * r * r * h} ${unit}*${unit}*${unit}`;
}
