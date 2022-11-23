function calculateVolumeAndArea(s) {
    let message = ' ';
    if (isNaN(s) === false && Number.isInteger(s) && s > 0 === true) {
        const cubeV = s * s * s;
        const cubeS = 6 * s * s;
        message = `Объем куба: ${cubeV}, площадь всей поверхности: ${cubeS}`;
    } else {
        message = 'При вычислении произошла ошибка';
    }
    console.log(message)
    return message;
}

calculateVolumeAndArea(7)

function getCoupeNumber(place) {
    let block = 0
    if (place <= 36 === true && place !== 0 && Number.isInteger(place) === true && place > 0) {
        block = Math.ceil(place / 4);
    } else if (place === 0 || place > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    console.log(block);
    return block;
}

getCoupeNumber(37);
