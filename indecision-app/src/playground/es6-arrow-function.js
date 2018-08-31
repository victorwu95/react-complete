const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;


console.log(square(8));
console.log(squareArrow(9));

const getFirstName = (fullname) => {
    return fullname.split(" ")[0];
}

console.log(getFirstName('Mike Smith'));

const getFirstName2 = (fullname) => fullname.split(" ")[0];

console.log(getFirstName2('Mike Smith'));



