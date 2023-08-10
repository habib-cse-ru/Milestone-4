//this is the solution of problem  no : 1
function cubeNumber(number) {
    if (typeof (number) != 'number') {
        return "Sorry ! This is not a valid Number ."
    }

    var result = Math.pow(number, 3);
    return result;
}


// this is the solution of problem no : 2
function matchFinder(string1, string2) {
    if (typeof (string1) != 'string' || typeof (string2) != 'string') {
        return "Sorry ! both string1 and string2 is not string  ."
    }
    return string1.includes(string2);
}


// this is the solution of problem no : 3
function sortMaker(arr) {
    if (arr[0] == arr[1]) {
        return "equal";
    }
    else if (arr[0] < arr[1]) {
        [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }
    return arr;
}

//This is the solution of problem no : 4 
function findAddress(obj) {
    let address = "";

    if (obj.street === undefined) {
        address += "__, ";
    } else {
        address += obj.street + ", ";
    }
    if (obj.house === undefined) {
        address += "__, ";
    } else {
        address += obj.house + ", ";
    }
    if (obj.society === undefined) {
        address += "__";
    } else {
        address += obj.society;
    }
    return address;
}
let adress = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}


// This is solution of problem no 5
function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return "oops ! you don't have any change to buy this chips";
    }

    let sum = 0;

    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if (sum >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}

console.log(canPay([5,15,16],30));

// this is to check if git hub is working or not ?



