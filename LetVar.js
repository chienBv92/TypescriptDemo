function foo() {
    var x = 10;
    if (true) {
        var x; // x ở đây cũng là x ở trên
        console.log(x); // in ra 20
    }
    console.log(x); // vẫn là 20
    var x = 20;
}
function fooLet() {
    var x = 10;
    var value;
    var con;
    if (true) {
        var x_1 = 20; // x ở đây cũng là x ở trên
        console.log(x_1); // in ra 20
    }
    console.log(x); // kq là 10
}
foo();
fooLet();
// Date time
var date = new Date();
console.log(date);
console.log(date.getMonth() + 1);
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getUTCDay());
console.log(date.getMinutes());
//# sourceMappingURL=LetVar.js.map