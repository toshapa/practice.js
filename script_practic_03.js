function sayHello(name) {
    if (typeof(name) === 'string') {
        return `Привет ${name}`;
    }
}

console.log(sayHello("jo"));

function returnNeighboringNumbers(int) {
    let arr = [];
    if (Number.isInteger(int) === true && typeof(int) === 'number') {
        for (let i = 0; i < 3; i++) {
            arr.push(int++)
        }
    }
    return arr;
}

console.log(returnNeighboringNumbers(5));

function getMathResult(x, y) {
    if (typeof(y) !== 'number' || y <= 0) {
        return num;
    }

    let string = '';
    let counter = x 

    for (let i = 1; i <= y; i++) {
        
        if (i === y) {
            string += x * i;
        } else {
            string += `${x * i}---`;
        }
    }
    console.log(string);
    return string;
}

getMathResult(5, 5);