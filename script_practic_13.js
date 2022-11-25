const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let totalSquare = 0;
    let space = 0;

    data.shops.forEach(shop => { totalSquare += shop.width * shop.length});
    space = totalSquare * data.height;
    return space * data.moneyPer1m3 <= data.budget ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

isBudgetEnough(shoppingMallData)