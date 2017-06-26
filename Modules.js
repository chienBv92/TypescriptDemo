"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// module 
var QLHS;
(function (QLHS) {
    QLHS.MyName = "ChienBV";
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
    QLHS.Person = Person;
    // Export class for use
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
    QLHS.Student = Student;
    function GetName(name, old) {
        if (old === void 0) { old = 20; }
        var info = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            info[_i - 2] = arguments[_i];
        }
        var result = "Name:" + name + ", Age: " + old + ", Infor: " + info;
        console.log(result);
    }
    QLHS.GetName = GetName;
})(QLHS = exports.QLHS || (exports.QLHS = {}));
var newPerson = new QLHS.Person("Chien", "Haiduong");
var newStudent = new QLHS.Student("Chien", "Haiduong", "11A1");
console.log(newPerson);
newPerson.run();
console.log(newStudent);
console.log(newStudent.address);
var newGetName = QLHS.GetName("Chien", 24, "Tu Ky", "Hai Duong");
//# sourceMappingURL=Modules.js.map