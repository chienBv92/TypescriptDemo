//Khai báo hàm có 
function GetName(name, old) {
    if (old === void 0) { old = 20; }
    var info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        info[_i - 2] = arguments[_i];
    }
    return name + ":" + old + ":" + info;
}
console.log(GetName("Chien", 25));
//Khai báo arrow function 
var GetName2 = function (name, old) {
    if (old === void 0) { old = 20; }
    var info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        info[_i - 2] = arguments[_i];
    }
    return name + ":" + old + ":" + info;
};
console.log(GetName2("Chien", 24));
var name_array = ["A", "B", "C", "D", "E"];
for (var i in name_array) {
    console.log(name_array[i]);
}
for (var _i = 0, name_array_1 = name_array; _i < name_array_1.length; _i++) {
    var value = name_array_1[_i];
    console.log(value);
}
var name_x = name_array.splice(2, 2);
console.log(name_x);
var name_array2 = ["A", "B", "C", "D", "E"];
var name_y = name_array2.slice(2, 4);
console.log(name_y);
//# sourceMappingURL=app.js.map