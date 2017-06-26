//import QLHS from './QLHS';

//Khai báo hàm có khởi tạo
console.log(GetName("Chien", 25));
function GetName(name, old = 20, ...info) {
    return name + ":" + old + ":" + info;
}


//Khai báo arrow function 
let GetName2 = (name, old = 20, ...info) => {
    return name + ":" + old + ":" + info;
}
console.log(GetName2("Chien", 24, "Tu Ky", "Hai Duong"));

enum Fruits { Orange, Banana, Mango, Apple };
let a: Fruits = Fruits.Orange;
alert(a);
