let add = function(a,b) {
    return a + b;
}

let subtract = function(a,b) {
    return a - b;
}

let multiply = function(a,b) {
    return a * b;
}

let divide = function(a,b){
    return a / b;
}

let increment = function(n){
    return ++n;
}

let decrement = function(n){
    return --n;
}

function makeInt(x, base) {
    const parsed = parseInt(x, 10);
    if (isNaN(parsed)) { return NaN; }
    return parsed;
}
console.log (makeInt("adas"))

function preserveDecimal (n) {
    const dec = parseFloat(n)
    return dec
}