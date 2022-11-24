const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = ''

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из:';

    arr.forEach(memb => {str += ` ${memb}`});
    return str;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(lower => {
        console.log(lower.toLowerCase())
    })
}

standardizeStrings(favoriteCities);