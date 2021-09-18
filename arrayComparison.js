const isSameElements = (one, tow) => {
    return one.length === tow.length && one.every((v, i) => {
        return v === tow[i]
    })
};


console.log(isSameElements([1,2], [1, 3]));
