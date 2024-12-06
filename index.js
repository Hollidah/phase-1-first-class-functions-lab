
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
    const length = drivers.length;
    return [drivers[length - 2], drivers[length - 1]];
}

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

const selectDifferentDrivers = function(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
}

const drivers = ['Mary', 'Bob', 'Paul', 'Sally'];

console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
