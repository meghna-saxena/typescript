"use strict";
var findNameLength = function (firstName, lastName) {
    var greaterLength = firstName > lastName ? firstName : lastName;
    var fullName = firstName.length + lastName.length;
    return { fullName: fullName, greaterLength: greaterLength };
};
console.log(findNameLength("sdjssdjlkdjklsd", "Saxena"));
var myAge = 27; //You may also chain more than 2 types!
myAge = "27";
