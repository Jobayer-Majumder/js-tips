const num = [3, 1, 5, 2, 14, 56];

const shuffle1 = num.sort(() => Math.random() - 0.5);
const shuffle2 = num.sort((a, b) => {
    return a - b
});

console.log(shuffle2);