const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam','Cris', 'Josh', 'Mark'];

function sortStudentsByGroups(arr) {
    let newArr = arr.sort();
    let masterArr = [] 

    const one = [];
    const two = [];
    const tree= [];
    const last = [];
    for (let k = 0; k < newArr.length; k++) {
        if (k < 3) {
            one.push(newArr[k])
        } else if (k < 6) {
            two.push(newArr[k])
        } else if (k < 9) {
            tree.push(newArr[k])
        } else {
            last.push(newArr[k])
        }
    }
    masterArr.push(one, two, tree, `Оставшиеся студенты: ${last.length === 0 ? '-' : last.join(' ')}`)
    console.log(masterArr)
    return one, two, tree, `Оставшиеся студенты: ${last.length === 0 ? '-' : last.join(' ')}`;
}

sortStudentsByGroups(students);