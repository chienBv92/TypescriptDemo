//import QLHS from './QLHS';
//Khai báo hàm có khởi tạo
console.log(GetName("Chien", 25));
function GetName(name, old) {
    if (old === void 0) { old = 20; }
    var info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        info[_i - 2] = arguments[_i];
    }
    return name + ":" + old + ":" + info;
}
//Khai báo arrow function 
var GetName2 = function (name, old) {
    if (old === void 0) { old = 20; }
    var info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        info[_i - 2] = arguments[_i];
    }
    return name + ":" + old + ":" + info;
};
console.log(GetName2("Chien", 24, "Tu Ky", "Hai Duong"));
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Orange"] = 0] = "Orange";
    Fruits[Fruits["Banana"] = 1] = "Banana";
    Fruits[Fruits["Mango"] = 2] = "Mango";
    Fruits[Fruits["Apple"] = 3] = "Apple";
})(Fruits || (Fruits = {}));
;
var a = Fruits.Orange;
alert(a);
//# sourceMappingURL=Function.js.map