"use strict";
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //101 (continues incrementing from the last no. of item prior to this one, so if we want it 2, 
})(Color || (Color = {}));
var bla = Color.Blue;
console.log(bla);
