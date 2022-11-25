const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    }

    return str.split('').reverse().join('');
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY',];

function availableCurr(arr, missingCurr) {
    let str = "Доступные валюты:\n";
    if (arr.length === 0) {
        str = 'Нет доступных валют';
    } else {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === missingCurr) {
                continue;
            }
            str += `${arr[i]}\n`;
        }
    }
    console.log(str);
    return str;
}


availableCurr([], 'CNY');