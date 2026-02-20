function factorial(n) {

    let factorial_num = n;
    
    for(let i = 1; i < n; i++) {
        factorial_num *= i
    }
    
    return factorial_num;
}

const num = 6;
console.log(factorial(num))

// Output: 6 * 5 * 4 * 3 * 2 * 1 = 720
