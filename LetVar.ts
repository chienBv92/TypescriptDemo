function foo() {
    var x = 10; 
    var x = 12;
    if (true) {
        var x = 20; // x ở đây cũng là x ở trên
        console.log(x); // in ra 20
    }
    console.log(x); // vẫn là 20
}

function fooLet() {
    let x = 10;
    var value: number;
    let con;

    if (true) {
        let x = 20; // x ở đây cũng là x ở trên
        console.log(x); // in ra 20
    }
    console.log(x); // kq là 10
}

foo();
fooLet();
// Date time
var date = new Date();
console.log(date);
console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getUTCDay());
console.log(date.getMinutes());

