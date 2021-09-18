const person = {
    name: 'john',
    age: 40,
    company: 'xyz'
};

// rename key of person obj
const {name: pName, age: pAge} = person;

console.log(pName, pAge);