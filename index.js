// Write your code here:
const fibonacci = num => {

    const fibonacci2 = n => {
        if (n < 2) return n;
        return fibonacci2(n - 1) + fibonacci2(n - 2);
    }

    const result = [];
    for (let i = 0; i <= num; i++) {
        result.push(fibonacci2(i));
    }
    return result;
}



console.log(fibonacci(0)); // [0]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
console.log(fibonacci(8))// [ 0, 1,  1,  2, 3, 5, 8, 13, 21]