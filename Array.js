var name_array = ["A", "B", "C", "D", "E"];
// In các phần tử trong mảng theo chỉ số 
for (var i in name_array) {
    console.log(name_array[i]);
}
// In các phần tử trong mảng theo giá trị như hàm foreach C#
for (var _i = 0, name_array_1 = name_array; _i < name_array_1.length; _i++) {
    var value = name_array_1[_i];
    console.log(value);
}
var name_x = name_array.splice(2, 2);
console.log(name_x);
var name_array2 = ["A", "B", "C", "D", "E"];
var name_y = name_array2.slice(2, 4);
console.log(name_y);
//# sourceMappingURL=Array.js.map