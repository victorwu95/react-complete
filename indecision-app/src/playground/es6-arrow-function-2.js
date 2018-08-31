// arguements object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound

// const user = {
//     name: "Dick",
//     cities: ['Gotham', 'Star City'],
//     printPlacesLived: function () {
//         console.log(this.name);

//         this.cities.forEach(function (city) {
//             console.log(this.name + " in " + city);
//         });
//     },
//     // this.name : "Bruce"
// };

// user.printPlacesLived();

const user = {
    name:'Pratik',
    cities:['pune','dublin','new york'],
    placesLived: function(){
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in '+ city);
        });
    },
    placesLivedES6() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in '+ city);
        });
    },
    placesLivedMap() {
        const cityMessages = this.cities.map((city) => {
            console.log(this.name + ' has lived in '+ city);
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    },
    placesLivedMapShort() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);
    }
};
user.placesLived();
user.placesLivedES6();
console.log(user.placesLivedMap());
console.log(user.placesLivedMapShort());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - Single number
    // multiply - return a new array where the number has been multiplied
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

