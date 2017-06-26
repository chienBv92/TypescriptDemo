var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(fname, address) {
        this.fname = fname;
        this.address = address;
    }
    Person.prototype.run = function () {
        console.log("Running");
    };
    Person.talk = function () {
        console.log("Talking");
    };
    return Person;
}());
var person = new Person("Chien", "Haiduong");
console.log(person);
person.run();
Person.talk(); // Gọi hàm static
//Kế thừa class Person
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(fname, address, fclass) {
        var _this = _super.call(this, fname, address) || this;
        _this.fclass = fclass;
        return _this;
    }
    Student.prototype.destruct = function () {
    };
    Student.prototype.learn = function () {
        console.log("Learning");
    };
    return Student;
}(Person));
var student = new Student("Chien", "Haiduong", "11A1");
console.log(student);
console.log(student.address);
student.destruct(); // hàm hủy khởi tạo
//# sourceMappingURL=Class.js.map