const myAddon = require('./build/Release/addon');

// Measure the execution time of the C++ addon
const startCpp = performance.now();
const resultCpp = myAddon.sum();
const endCpp = performance.now();

console.log(`C++ Addon Result: ${resultCpp}`);
console.log(`C++ Addon Execution Time: ${endCpp - startCpp} milliseconds`);

// JavaScript version of the same operation
function sumJs() {
    let a = 3.1415926, b = 2.718;
    for (let i = 0; i < 100000000; i++) {
        a += b;
    }
    return a;
}

// Measure the execution time of the JavaScript version
const startJs = performance.now();
const resultJs = sumJs();
const endJs = performance.now();

console.log(`JavaScript Result: ${resultJs}`);
console.log(`JavaScript Execution Time: ${endJs - startJs} milliseconds`);

// Calculate and display the speedup
const speedup = (endJs - startJs) / (endCpp - startCpp);
console.log(`C++ Addon is ${speedup.toFixed(2)} times faster than JavaScript.`);
