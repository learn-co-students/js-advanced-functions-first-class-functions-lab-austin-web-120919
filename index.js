// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    return [driverArray[0], driverArray[1]];

}

const returnLastTwoDrivers = function(driverArray){
    return [driverArray[driverArray.length - 2],driverArray[driverArray.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number){
    return function(fare){
        return fare * number
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray,driverFn){
    return driverFn(driverArray);
}