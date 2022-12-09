function factorial(n) {
    if (typeof(n) === "string" || Number.isInteger(n)) {
        return 'We need a number only'
    }
    if (n >= 1) {
        return n * factorial(n - 1) 
    } else {
        return 1;
    }
}
console.log(factorial('hi'));
console.log(factorial([1,4,5]));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(8));
console.log(factorial({
    name: 'Gigi',
    kolo: 5
}))
