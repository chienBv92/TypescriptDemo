// string template nối các chuỗi
let fname = "Chien";
let message = `    Xin chao ${fname} đã đến`;
console.log(message);

// slice 
var message2 = message.slice(-4,8);
console.log(message2);

// substring
var message2 = message.substring(-2, 8); // truyền vào số âm sẽ tự hiểu là 0
console.log(message2);

// substr 
var message3 = message.substr(4, 8); // truyền vào số âm sẽ lấy ngược lại từ cuối
console.log(message3);

// replace
var message4 = message.replace("Chien", "Myname"); // truyền vào số âm sẽ lấy ngược lại từ cuối
console.log(message4);

// split
var message5 = message.split(" "); //Tách chuỗi bởi dấu cách
console.log(message5);

// xem kí tự và xem mã asci
var message6 = message.charCodeAt(1); //Tách chuỗi bởi dấu cách
console.log(message6);

// xem kí tự và xem mã asci
var message7 = message.trim(); //Tách chuỗi bởi dấu cách
console.log(message7);
console.log(message7.length);
