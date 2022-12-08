"use strict";
// length => price
const priceArr = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30, 35, 36, 40, 42, 44];
function cutRod(p, n) {
    if (n === 0) {
        return 0;
    }
    let q = Number.MIN_VALUE;
    for (let i = 1; i <= n; i++) {
        q = Math.max(q, p[i] + cutRod(p, n - i));
        // console.log(`a=${q}`)
    }
    return q;
}
function memorizedCutRod(p, n) {
    const r = new Array(n + 1).fill(-1); // cached result
    // console.log(r)
    return recur(p, n, r);
}
function recur(p, n, r) {
    if (r[n] >= 0) {
        return r[n];
    }
    let q = -1;
    if (n === 0) {
        q = 0;
    }
    else {
        for (let i = 1; i <= n; i++) {
            q = Math.max(q, p[i] + recur(p, n - i, r));
        }
    }
    r[n] = q;
    return q;
}
console.time('group1');
console.log(`cutRod 4 = ${cutRod(priceArr, 4)}, expected 10`);
console.log(`cutRod 5 = ${cutRod(priceArr, 5)}, expected 13`);
console.log(`cutRod 10 = ${cutRod(priceArr, 10)}, expected 30`);
console.log(`cutRod 15 = ${cutRod(priceArr, 15)}, expected 45`);
console.timeEnd('group1');
console.time('group2');
console.log(`cutRod 4 = ${memorizedCutRod(priceArr, 4)}, expected 10`);
console.log(`cutRod 5 = ${memorizedCutRod(priceArr, 5)}, expected 13`);
console.log(`cutRod 10 = ${memorizedCutRod(priceArr, 10)}, expected 30`);
console.log(`cutRod 15 = ${memorizedCutRod(priceArr, 15)}, expected 45`);
console.timeEnd('group2');
