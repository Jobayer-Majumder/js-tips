const arr = [1, 2, 4, 2, 5, 1, 7, 2];

function findDuplicate(pera) {
    const temp = [];
    for (let i = 0; i < pera.length; i++) {
        const value = pera[i];

        const index = temp.indexOf(value);
        if (index == -1) {
            temp.push(value)
        }
    }
    return temp
}
const result = findDuplicate(arr)

// console.log(result)


const set = new Set(arr)
console.log(set);