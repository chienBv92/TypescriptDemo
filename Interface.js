var Person2 = (function () {
    function Person2(fname, address) {
        this.fname = fname;
        this.address = address;
    }
    Person2.prototype.run = function () {
        console.log("Running");
    };
    Person2.talk = function () {
        console.log("Talking");
    };
    return Person2;
}());
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "white", width: 12 });
var square = {
    color: "red",
    width: 123
};
console.log(square);
console.log(mySquare);
var Caculate = (function () {
    function Caculate() {
    }
    return Caculate;
}());
//# sourceMappingURL=Interface.js.map