
function firstTask () {
    let i = 4;
    do {
        i++
        console.log(i)
    } while (i < 10);
    
}

function secondTask () {
    for (let i = 20; i >= 10; i-- ) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}

function thirdTask () {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

function fourthTask() {
    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
                continue;
            } else {
                console.log(i);
        }
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++ ) {
        arrayOfNumbers.push(i)
    }
    console.log(arrayOfNumbers);
}

fifthTask();

fourthTask();

thirdTask();

secondTask();

firstTask();


