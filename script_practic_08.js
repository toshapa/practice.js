function getTimeFromMinutes(minut) {
    let message = ''
    if (minut <= 600 && minut >= 0 && Number.isInteger(minut)){
        let hour = Math.floor(minut / 60);
        let outMinut = minut % 60;

        let hourStr = ''

        switch (hour) {
            case 0:
                hourStr = 'часов';
                break;
            case 1:
                hourStr = 'час';
                break;
            case 2:
            case 3:
            case 4:
                hourStr = 'часа';
                break;
            default:
                hourStr = 'часов';
        }
        message = `Это ${hour} ${hourStr} и ${outMinut} минут`;
    } else {
        message = "Ошибка, проверьте данные";
    }
    
    console.log(message);
    return message;
}

getTimeFromMinutes(150)
getTimeFromMinutes(50)
getTimeFromMinutes(0)
getTimeFromMinutes(-150)


function findMaxNumber(a, b ,c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');
